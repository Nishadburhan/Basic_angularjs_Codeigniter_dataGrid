	var app = angular.module('dataGrid',[]);

	app.controller('datagridCtrl', function($scope, $http, $log) {
		$("#btn_save").hide();
		$scope.table_data=[];
		$scope.error_msg="";
		$scope.suc_msg="";
		$scope.dummy_ary=[];
		$scope.dynamic_ary=[];

		$scope.show_packages = function() {
			$http.get("datagrid/show_all").success(function(response) {
				$scope.table_data=response;
			});
		}
				$scope.show_packages();
		
		

		$scope.add_package = function() {
			if($scope.dummy_ary.indexOf($scope.awb)<0) {

				$http.post('datagrid/if_exist_in_table', {
				            'awb' : $scope.awb, 
				        }
			    ).success(function (data, status, headers, config) {
			    	if (data=='true') {
			    		$scope.error_msg="Package already added, Try a new AWB!";
			    	}else {
			    		$scope.error_msg="";
			    		$scope.dynamic_ary.push({awb:$scope.awb,origin:$scope.origin,destin:$scope.destin,consignee:$scope.consignee,weight:$scope.weight});
			    		$scope.dummy_ary.push($scope.awb);
			    		$log.info($scope.dynamic_ary);
			    		$scope.awb="";
			    		$scope.origin="";
			    		$scope.destin="";
			    		$scope.consignee="";
			    		$scope.weight="";

			    		$("#btn_save").show();
			    	}
			    });

			}else {
				$scope.error_msg='AWB :'+$scope.awb+' Already in list, add a new one!';
				$log.info('Old Data');
			}
		}

		$scope.save_package = function() {

			$http({
		        url: 'datagrid/save_package_data',
		        method: "POST",
		        data: $.param({"items" : angular.copy($scope.dynamic_ary)}),
		        headers: {
		                 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		        }
		    }).success(function(data){
		    	
		    	$scope.dummy_ary=[];
				$scope.dynamic_ary=[];

			    $scope.suc_msg="Package Successfully Added!";
		    });
		}
	});