'use strict';

import BaseController from 'base/base.controller';

export default class SignInController extends BaseController {

  static $inject = ['$state', '$filter', '$translate', 'AuthService', 'SecurityService', 'StoreService', 'toastr'];

  constructor($state, $filter, $translate, AuthService, SecurityService, StoreService, toastr) {
    super();
    this.$state = $state;
    this.$filter = $filter;
    this.$translate = $translate;
    this.AuthService = AuthService;
    this.SecurityService = SecurityService;
    this.StoreService = StoreService;
    this.toastr = toastr;
    this.passwordType = 'password';
    this.currentLanguage = angular.getCurrentLanguage(StoreService.get('currentLanguage'));
    this.input = {
      email: null,
      password: null
    };
  }

  loginForm(loginForm) {
    if (loginForm.$valid) {
      this.isSubmit = true;
      this.AuthService.login(this.input).then((response) => {
        if (response && response.data) {
          this.SecurityService.setAccessToken(response.data.token);
          this.SecurityService.setUserInfo(response.data.user_info);
          this.toastr.success(response.message, this.translate('authenticated'));
          this.$state.go('dashboard.store.list');
        }
        this.isSubmit = false;
      }, (error) => {
        this.isSubmit = false;
        this.toastr.error(error.message, this.translate('error'));
      });
    }
  }

  showPassword() {
    this.showInputPassword = !this.showInputPassword;
    if (this.showInputPassword) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  clickLogo(loginForm) {
    loginForm.$setPristine();
  }

  changeLanguage() {
    const currentLanguage = angular.getCurrentLanguage(this.StoreService.get('currentLanguage'));
    const key = currentLanguage === 'en' ? 'ja' : 'en';
    this.$translate.use(key);
    this.StoreService.set('currentLanguage', key);
    this.currentLanguage = key;
  }
}
