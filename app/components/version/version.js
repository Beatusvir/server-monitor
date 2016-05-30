'use strict';

angular.module('server-monitor.version', [
  'server-monitor.version.interpolate-filter',
  'server-monitor.version.version-directive'
])

.value('version', '0.1');
