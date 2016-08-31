//Ionic Starter App

//angular.module is a global place for creating, registering and retrieving Angular modules
//'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
//the 2nd parameter is an array of 'requires'
//'starter.services' is found in services.js
//'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 
                           'LocalStorageModule',
                           'DashCtrl',
                           'Accountctrl',
                           'ProductsCtrl',
                           'ProductCtrl',
                           'ChatsCtrl',
                           'ChatDetailCtrl',
                           'FriendsCtrl',
                           'FriendDetailCtrl',
                           'SignInCtrl',
                           'SkuDetailsCtrl',
                           'SkuListCtrl',
                           'RePasswordCtrl',
                           'SkuOrderListCtrl',
                           'SkuListViewCtrl',
                           'SkuOrderDetailCtrl',
                           'SkuStatusCtrl',
                           'skuCreateListCtrl',
                           'skuReturnListCtrl',
                           'SkuReturnDetailCtrl',
                           'skuRefundListCtrl',
                           'skuSettlementListCtrl',
                           'skuSettlementDetailCtrl',
                           'skuSettlementOrderDetailCtrl',
                           'skuSettlementReturnDetailCtrl',
                           'starter.services'])

                           .run(function ($ionicPlatform,localStorageService) {

                        	   $ionicPlatform.ready(function () {
                        		   // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                        		   // for form inputs)
                        		   if (window.cordova && window.cordova.plugins.Keyboard) {
                        			   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                        		   }
                        		   if (window.StatusBar) {
                        			   // org.apache.cordova.statusbar required
                        			   StatusBar.styleDefault();
                        		   }
                        	   });
                           })

                           .config(function ($stateProvider, $urlRouterProvider,localStorageServiceProvider) {

                        	   // Ionic uses AngularUI Router which uses the concept of states
                        	   // Learn more here: https://github.com/angular-ui/ui-router
                        	   // Set up the various states which the app can be in.
                        	   // Each state's controller can be found in controllers.js
                        	   $stateProvider

                        	   // setup an abstract state for the tabs directive
                        	   .state('signin', {
                        		   url: '/sign-in',
                        		   templateUrl: 'templates/sign-in.html',
                        		   controller: 'SignInCtrl'
                        	   })

                        	   .state('Re-password', {
                        		   url: '/Re-password',
                        		   templateUrl: 'templates/Re-password.html',
                        		   controller: 'RePasswordCtrl'
                        	   })


                        	   .state('tab', {
                        		   url: "/tab",
                        		   abstract: true,
                        		   templateUrl: "templates/tabs.html"
                        	   })

                        	   // Each tab has its own nav history stack:

                        	   .state('tab.dash', {
                        		   url: '/dash',
                        		   views: {
                        			   'tab-dash': {
                        				   templateUrl: 'templates/tab-dash.html',
                        				   controller: 'DashCtrl'
                        			   }
                        		   }
                        	   })

                        	   .state('tab.products', {
                        		   url: '/products',
                        		   views: {
                        			   'tab-products': {
                        				   templateUrl: 'templates/tab-products.html',
                        				   controller: 'ProductsCtrl',
                        				   resolve: {
                        					   products: function (Products) {
                        						   return Products.top();
                        					   }
                        				   }

                        			   }
                        		   }
                        	   })

                        	   .state('tab.product-detail', {
                        		   url: '/product/{productUrl:.*}',
                        		   views: {
                        			   'tab-products': {
                        				   templateUrl: 'templates/product-detail.html',
                        				   controller: 'ProductCtrl',
                        				   resolve: {
                        					   product: function (Products, $stateParams) {
                        						   var productUrl = $stateParams.productUrl;
                        						   return Products.get(productUrl);
                        					   }
                        				   }
                        			   }
                        		   }
                        	   })

                        	   .state('tab.chats', {
                        		   url: '/chats',
                        		   views: {
                        			   'tab-chats': {
                        				   templateUrl: 'templates/tab-chats.html',
                        				   controller: 'ChatsCtrl'
                        			   }
                        		   }
                        	   })
                        	   .state('tab.chat-detail', {
                        		   url: '/chats/:chatId',
                        		   views: {
                        			   'tab-chats': {
                        				   templateUrl: 'templates/chat-detail.html',
                        				   controller: 'ChatDetailCtrl'
                        			   }
                        		   }
                        	   })

                        	   .state('tab.friends', {
                        		   url: '/friends',
                        		   views: {
                        			   'tab-friends': {
                        				   templateUrl: 'templates/tab-friends.html',
                        				   controller: 'FriendsCtrl'
                        			   }
                        		   }
                        	   })
                        	   .state('tab.friend-detail', {
                        		   url: '/friend/:friendId',
                        		   views: {
                        			   'tab-friends': {
                        				   templateUrl: 'templates/friend-detail.html',
                        				   controller: 'FriendDetailCtrl'
                        			   }
                        		   }
                        	   })

                        	   /*  .state('tab.tab-sku', {
                        		   url: '/sku',
                        		   views: {
                        			   'tab-sku': {
                        				   templateUrl: 'templates/tab-sku.html',
                        				   controller: 'SkuListCtrl',

                        			   }
                        		   }
                        	   })*/

                        	   .state('tab.skuListView', {
                        		   url:  '/sku/{skuUrl:.*}',
                        		   views: {
                        			   'tab-SkuList': {
                        				   templateUrl: 'templates/tab-skuDetail.html',
                        				   controller: 'SkuDetailsCtrl',
                        				   resolve: {
                        					   skuUrlReturn: function (skuProducts, $stateParams) {
                        						   var skuUrl = $stateParams.skuUrl;
                        						   return skuProducts.get(skuUrl);
                        					   }
                        				   }

                        			   }
                        		   }
                        	   })

                        	   .state('tab.skuList', {
                        		   url: '/skuList',
                        		   views: {
                        			   'tab-SkuList': {
                        				   templateUrl: 'templates/tab-skuList.html',
                        				   controller: 'SkuListCtrl'

                        			   }
                        		   }
                        	   })

                        	   .state('tab.status', {
                        		   url: '/status',
                        		   views: {
                        			   'tab-Status': {
                        				   templateUrl: 'templates/tab-skuStatus.html',
                        				   controller: 'SkuStatusCtrl'
                        			   }
                        		   }
                        	   })

                        	   .state('tab.skuOrderList', {
                        		   url: '/skuOrderList/{status:.*}',
                        		   views: {
                        			   'tab-Status': {
                        				   templateUrl: 'templates/tab-skuOrderList.html',
                        				   controller: 'SkuOrderListCtrl'/*,
                        				   resolve: {
                        					   statusUrlReturn: function (skuOrderListProducts, $stateParams) {
                        						   var statusUrl = $stateParams.statusUrl;
                        						   return skuOrderListProducts.get(statusUrl);
                        					   }
                        				   }*/
                        			   }
                        		   }
                        	   })

                        	   .state('tab.skuOrderDetail', {
                        		   url: '/skuOrderDetail/{orderUrl:.*}',
                        		   views: {
                        			   'tab-Status': {
                        				   templateUrl: 'templates/tab-skuOrderDetail.html',
                        				   controller: 'SkuOrderDetailCtrl',
                        				   resolve: {
                        					   orderUrlReturn: function (skuOrderDetailProducts, $stateParams) {
                        						   var orderUrl = $stateParams.orderUrl;
                        						   return skuOrderDetailProducts.get(orderUrl);
                        					   }
                        				   }
                        			   }
                        		   }
                        	   })

                        	   .state('tab.skuReturnList', {
                        		   url: '/skuReturnList/{returns:.*}',
                        		   reload: true,
                        		   views: {
                        			   'tab-Status': {
                        				   templateUrl: 'templates/tab-skuReturnList.html',
                        				   controller: 'skuReturnListCtrl'

                        			   }
                        		   }
                        	   })



                        	   .state('tab.skuReturnDetail', {
                        		   url: '/skuReturnDetail/{returnUrl:.*}',
                        		   views: {
                        			   'tab-Status': {
                        				   templateUrl: 'templates/tab-skuReturnDetail.html',
                        				   controller: 'SkuReturnDetailCtrl',
                        				   resolve: {
                        					   returnUrlReturn: function (skuReturnDetailProducts, $stateParams) {

                        						   var returnUrl = $stateParams.returnUrl;

                        						   return skuReturnDetailProducts.get(returnUrl);
                        					   }
                        				   }
                        			   }
                        		   }
                        	   })

                        	   .state('tab.skuRefundList', {
                        		   url: '/skuRefundList/{refund:.*}',
                        		   views: {
                        			   'tab-Status': {
                        				   templateUrl: 'templates/tab-skuRefundList.html',
                        				   controller: 'skuRefundListCtrl'

                        			   }
                        		   }
                        	   })


                        	   /*
                        	   .state('tab.skuReturnDetail', {
                        		   url: '/skuReturnDetail/{returnUrl:.*}',
                        		   views: {
                        			   'tab-Status': {
                        				   templateUrl: 'templates/tab-skuReturnDetail.html',
                        				   controller: 'SkuReturnDetailCtrl',
                        				   resolve: {
                        					   returnUrlReturn: function (skuReturnDetailProducts, $stateParams) {

                        						   var returnUrl = $stateParams.returnUrl;

                        						   return skuReturnDetailProducts.get(returnUrl);
                        					   }
                        				   }
                        			   }
                        		   }
                        	   })*/

                        	   .state('tab.skuSettlementList', {
                        		   url: '/skuSettlementList/{days:.*}',
                        		   views: {
                        			   'tab-Status': {
                        				   templateUrl: 'templates/tab-skuSettlementList.html',
                        				   controller: 'skuSettlementListCtrl',
                        					   resolve: {
                            					   settlement_daysReturn: function (skuSettlementListProducts, $stateParams) {

                            						   var days = $stateParams.days;

                            						   return skuSettlementListProducts.get(days);
                            					   }
                            				   }
                        			   }
                        		   }
                        	   })


                        	   .state('tab.skuSettlementDetail', {
                        		   url: '/skuSettlementReportDetail/{settlement_id:.*}',
                        		   views: {
                        			   'tab-Status': {
                        				   templateUrl: 'templates/tab-skuSettlementDetail.html',
                        				   controller: 'skuSettlementDetailCtrl',
                        				   resolve: {
                        					   settlement_idReturn: function (skuSettlementDetailProducts, $stateParams) {

                        						   var settlement_id = $stateParams.settlement_id;

                        						   return skuSettlementDetailProducts.get(settlement_id);
                        					   }
                        				   }
                        			   }
                        		   }
                        	   })

                        	   .state('tab.skuSettlementReportOrderDetail', {
                        		   url: '/skuSettlementReportOrderDetail/{settlement_id:.*}',
                        		   views: {
                        			   'tab-Status': {
                        				   templateUrl: 'templates/tab-skuSettlementReportOrderDetail.html',
                        				   controller: 'skuSettlementOrderDetailCtrl',
                        				   resolve: {
                        					   settlement_idReportOrder: function (skuSettlementOrderDetailProducts, $stateParams) {

                        						   var settlement_id = $stateParams.settlement_id;

                        						   return skuSettlementOrderDetailProducts.get(settlement_id);
                        					   }
                        				   }
                        			   }
                        		   }
                        	   })
                        	   
                        	   .state('tab.skuSettlementReturnDetail', {
                        		   url: '/skuSettlementReturnDetail/{settlement_id:.*}',
                        		   views: {
                        			   'tab-Status': {
                        				   templateUrl: 'templates/tab-skuSettlementReturnDetail.html',
                        				   controller: 'skuSettlementReturnDetailCtrl',
                        				   resolve: {
                        					   settlement_idReturn: function (skuSettlementReturnDetailProducts, $stateParams) {

                        						   var settlement_id = $stateParams.settlement_id;

                        						   return skuSettlementReturnDetailProducts.get(settlement_id);
                        					   }
                        				   }
                        			   }
                        		   }
                        	   })

                        	   .state('tab.skuCreateList', {
                        		   url: '/skuCreateList',
                        		   views: {
                        			   'tab-dash': {
                        				   templateUrl: 'templates/skuCreateList.html',
                        				   controller: 'skuCreateListCtrl'
                        			   }
                        		   }
                        	   })


                        	   .state('tab.account', {
                        		   url: '/account',
                        		   views: {
                        			   'tab-account': {
                        				   templateUrl: 'templates/tab-account.html',
                        				   controller: 'AccountCtrl'
                        			   }
                        		   }
                        	   });

                        	   // if none of the above states are matched, use this as the fallback
                        	   $urlRouterProvider.otherwise('/sign-in');
                        	   localStorageServiceProvider
                        	   .setPrefix('jet-ionic');
                           });
