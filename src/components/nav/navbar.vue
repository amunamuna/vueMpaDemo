<template>
  <div id="navbar" class="navbar navbar-default          ace-save-state">
    <div class="navbar-container ace-save-state" id="navbar-container">
      <!-- #section:basics/sidebar.mobile.toggle -->
      <button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
        <span class="sr-only">Toggle sidebar</span>

        <span class="icon-bar"></span>

        <span class="icon-bar"></span>

        <span class="icon-bar"></span>
      </button>

      <!-- /section:basics/sidebar.mobile.toggle -->
      <div class="navbar-header pull-left">
        <!-- #section:basics/navbar.layout.brand -->
        <a href="#" class="navbar-brand">
          <small>
            <i class="fa fa-leaf"></i>
            Ace Admin
          </small>
        </a>

        <!-- /section:basics/navbar.layout.brand -->

        <!-- #section:basics/navbar.toggle -->

        <!-- /section:basics/navbar.toggle -->
      </div>

      <!-- #section:basics/navbar.dropdown -->
      <div class="navbar-buttons navbar-header pull-right" role="navigation">
        <ul class="nav ace-nav">
          <li class="grey dropdown-modal">
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
              <i class="ace-icon fa fa-tasks"></i>
              <span class="badge badge-grey">4</span>
            </a>

            <ul class="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
              <li class="dropdown-header">
                <i class="ace-icon fa fa-check"></i>
                4 Tasks to complete
              </li>

              <li class="dropdown-content">
                <ul class="dropdown-menu dropdown-navbar">
                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <span class="pull-left">Software Update</span>
                        <span class="pull-right">65%</span>
                      </div>

                      <div class="progress progress-mini">
                        <div style="width:65%" class="progress-bar"></div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <span class="pull-left">Hardware Upgrade</span>
                        <span class="pull-right">35%</span>
                      </div>

                      <div class="progress progress-mini">
                        <div style="width:35%" class="progress-bar progress-bar-danger"></div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <span class="pull-left">Unit Testing</span>
                        <span class="pull-right">15%</span>
                      </div>

                      <div class="progress progress-mini">
                        <div style="width:15%" class="progress-bar progress-bar-warning"></div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <span class="pull-left">Bug Fixes</span>
                        <span class="pull-right">90%</span>
                      </div>

                      <div class="progress progress-mini progress-striped active">
                        <div style="width:90%" class="progress-bar progress-bar-success"></div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="dropdown-footer">
                <a href="#">
                  See tasks with details
                  <i class="ace-icon fa fa-arrow-right"></i>
                </a>
              </li>
            </ul>
          </li>

          <li class="purple dropdown-modal">
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
              <i class="ace-icon fa fa-bell icon-animated-bell"></i>
              <span class="badge badge-important">8</span>
            </a>

            <ul class="dropdown-menu-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
              <li class="dropdown-header">
                <i class="ace-icon fa fa-exclamation-triangle"></i>
                8 Notifications
              </li>

              <li class="dropdown-content">
                <ul class="dropdown-menu dropdown-navbar navbar-pink">
                  <li>
                    <a href="#">
                      <div class="clearfix">
													<span class="pull-left">
														<i class="btn btn-xs no-hover btn-pink fa fa-comment"></i>
														New Comments
													</span>
                        <span class="pull-right badge badge-info">+12</span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="btn btn-xs btn-primary fa fa-user"></i>
                      Bob just signed up as an editor ...
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="clearfix">
													<span class="pull-left">
														<i class="btn btn-xs no-hover btn-success fa fa-shopping-cart"></i>
														New Orders
													</span>
                        <span class="pull-right badge badge-success">+8</span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="clearfix">
													<span class="pull-left">
														<i class="btn btn-xs no-hover btn-info fa fa-twitter"></i>
														Followers
													</span>
                        <span class="pull-right badge badge-info">+11</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="dropdown-footer">
                <a href="#">
                  See all notifications
                  <i class="ace-icon fa fa-arrow-right"></i>
                </a>
              </li>
            </ul>
          </li>

          <li class="green dropdown-modal">
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
              <i class="ace-icon fa fa-envelope icon-animated-vertical"></i>
              <span class="badge badge-success">5</span>
            </a>

            <ul class="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
              <li class="dropdown-header">
                <i class="ace-icon fa fa-envelope-o"></i>
                5 Messages
              </li>

              <li class="dropdown-content">
                <ul class="dropdown-menu dropdown-navbar">
                  <li>
                    <a href="#" class="clearfix">
                      <img src="../../static/ace_admin_v1.4.0/assets/avatars/avatar.png" class="msg-photo" alt="Alex's Avatar" />
                      <span class="msg-body">
													<span class="msg-title">
														<span class="blue">Alex:</span>
														Ciao sociis natoque penatibus et auctor ...
													</span>

													<span class="msg-time">
														<i class="ace-icon fa fa-clock-o"></i>
														<span>a moment ago</span>
													</span>
												</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="clearfix">
                      <img src="../../static/ace_admin_v1.4.0/assets/avatars/avatar3.png" class="msg-photo" alt="Susan's Avatar" />
                      <span class="msg-body">
													<span class="msg-title">
														<span class="blue">Susan:</span>
														Vestibulum id ligula porta felis euismod ...
													</span>

													<span class="msg-time">
														<i class="ace-icon fa fa-clock-o"></i>
														<span>20 minutes ago</span>
													</span>
												</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="clearfix">
                      <img src="../../static/ace_admin_v1.4.0/assets/avatars/avatar4.png" class="msg-photo" alt="Bob's Avatar" />
                      <span class="msg-body">
													<span class="msg-title">
														<span class="blue">Bob:</span>
														Nullam quis risus eget urna mollis ornare ...
													</span>

													<span class="msg-time">
														<i class="ace-icon fa fa-clock-o"></i>
														<span>3:15 pm</span>
													</span>
												</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="clearfix">
                      <img src="../../static/ace_admin_v1.4.0/assets/avatars/avatar2.png" class="msg-photo" alt="Kate's Avatar" />
                      <span class="msg-body">
													<span class="msg-title">
														<span class="blue">Kate:</span>
														Ciao sociis natoque eget urna mollis ornare ...
													</span>

													<span class="msg-time">
														<i class="ace-icon fa fa-clock-o"></i>
														<span>1:33 pm</span>
													</span>
												</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="clearfix">
                      <img src="../../static/ace_admin_v1.4.0/assets/avatars/avatar5.png" class="msg-photo" alt="Fred's Avatar" />
                      <span class="msg-body">
													<span class="msg-title">
														<span class="blue">Fred:</span>
														Vestibulum id penatibus et auctor  ...
													</span>

													<span class="msg-time">
														<i class="ace-icon fa fa-clock-o"></i>
														<span>10:09 am</span>
													</span>
												</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="dropdown-footer">
                <a href="inbox.html">
                  See all messages
                  <i class="ace-icon fa fa-arrow-right"></i>
                </a>
              </li>
            </ul>
          </li>

          <!-- #section:basics/navbar.user_menu -->
          <li class="light-blue dropdown-modal">
            <a data-toggle="dropdown" href="#" class="dropdown-toggle">
              <img class="nav-user-photo" src="../../static/ace_admin_v1.4.0/assets/avatars/user.jpg" alt="Jason's Photo" />
              <span class="user-info">
									<small>Welcome,</small>
									Jason
								</span>

              <i class="ace-icon fa fa-caret-down"></i>
            </a>

            <ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
              <li>
                <a href="#">
                  <i class="ace-icon fa fa-cog"></i>
                  Settings
                </a>
              </li>

              <li>
                <a href="profile.html">
                  <i class="ace-icon fa fa-user"></i>
                  Profile
                </a>
              </li>

              <li class="divider"></li>

              <li>
                <a href="#">
                  <i class="ace-icon fa fa-power-off"></i>
                  Logout
                </a>
              </li>
            </ul>
          </li>

          <!-- /section:basics/navbar.user_menu -->
        </ul>
      </div>

      <!-- /section:basics/navbar.dropdown -->
    </div><!-- /.navbar-container -->
  </div>
</template>

<!-- basic scripts -->

<script type="text/javascript">
  if('ontouchstart' in document.documentElement) document.write("<script src='../../static/ace_admin_v1.4.0/components/_mod/jquery.mobile.custom/jquery.mobile.custom.js'>"+"<"+"/script>");
</script>
<script src="../../static/ace_admin_v1.4.0/components/bootstrap/dist/js/bootstrap.js"></script>

<!-- page specific plugin scripts -->

<!--[if lte IE 8]>
<script src="../../static/ace_admin_v1.4.0/components/ExplorerCanvas/excanvas.js"></script>
<![endif]-->
<script src="../../static/ace_admin_v1.4.0/components/_mod/jquery-ui.custom/jquery-ui.custom.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/jqueryui-touch-punch/jquery.ui.touch-punch.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/jquery.gritter/js/jquery.gritter.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/bootbox.js/bootbox.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/_mod/easypiechart/jquery.easypiechart.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/bootstrap-datepicker/dist/js/bootstrap-datepicker.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/jquery.hotkeys/index.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/_mod/bootstrap-wysiwyg/bootstrap-wysiwyg.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/select2/dist/js/select2.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/fuelux/js/spinbox.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/_mod/x-editable/bootstrap-editable.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/_mod/x-editable/ace-editable.js"></script>
<script src="../../static/ace_admin_v1.4.0/components/jquery.maskedinput/dist/jquery.maskedinput.js"></script>

<!-- ace scripts -->
<script src="../../static/ace_admin_v1.4.0/assets/js/src/elements.scroller.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/elements.colorpicker.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/elements.fileinput.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/elements.typeahead.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/elements.wysiwyg.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/elements.spinner.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/elements.treeview.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/elements.wizard.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/elements.aside.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.basics.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.scrolltop.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.ajax-content.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.touch-drag.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.sidebar.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.sidebar-scroll-1.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.submenu-hover.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.widget-box.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.settings.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.settings-rtl.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.settings-skin.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.widget-on-reload.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.searchbox-autocomplete.js"></script>


<!-- the following scripts are used in demo only for onpage help and you don't need them -->
<link rel="stylesheet" href="../../static/ace_admin_v1.4.0/assets/css/ace.onpage-help.css" />
<link rel="stylesheet" href="../../static/ace_admin_v1.4.0/docs/assets/js/themes/sunburst.css" />

<script type="text/javascript"> ace.vars['base'] = '..'; </script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/elements.onpage-help.js"></script>
<script src="../../static/ace_admin_v1.4.0/assets/js/src/ace.onpage-help.js"></script>
<script src="../../static/ace_admin_v1.4.0/docs/assets/js/rainbow.js"></script>
<script src="../../static/ace_admin_v1.4.0/docs/assets/js/language/generic.js"></script>
<script src="../../static/ace_admin_v1.4.0/docs/assets/js/language/html.js"></script>
<script src="../../static/ace_admin_v1.4.0/docs/assets/js/language/css.js"></script>
<script src="../../static/ace_admin_v1.4.0/docs/assets/js/language/javascript.js"></script>

<script>
  export default{
    data () {
      return {msg: '这个是Home模板页'}
    }
  }
</script>
