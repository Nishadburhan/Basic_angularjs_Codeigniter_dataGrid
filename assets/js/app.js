
	var app = angular.module('myApp', ['ngMaterial']);
	app.controller('productsCtrl', function($scope, $http) {
		// $("#crud_form").hide();
		$('#btn-cancel').hide();
		$('#btn-update-product').hide();
		$scope.id = "-1";
	    $scope.showCreateForm = function(){
		    // clear form
		    $scope.clearForm();
		    $scope.test();
		    // $("#crud_form").show();
		     
		    // change modal title
		    $('#modal-product-title').text("Create New Product");
		     
		    // hide update product button
		    $('#btn-update-product').hide();
		     
		    // show create product button
		    $('#btn-create-product').show();
		     
		}
		// clear variable / form values
		$scope.clearForm = function(){
		    $scope.id = "-1";
		    $scope.name = "";
		    $scope.description = "";
		    $scope.price = "";
		}

		$scope.test = function() {
			console.log('Works');
		}

		$scope.orderit = function(x) {
		    $scope.myOrder = x;
		  }
		$scope.createProduct = function(){
         
	    // fields in key-value pairs
	    $http.post('angular_js/create_product', {
		            'name' : $scope.name, 
		            'description' : $scope.description, 
		            'price' : $scope.price
		        }
		    ).success(function (data, status, headers, config) {
		        console.log(data);
		        // tell the user new product was created
		        // Materialize.toast(data, 4000);
		         
		        // close modal
		        // $('#modal-product-form').closeModal();
		        $('#myModal').modal('toggle');
		         
		        // clear modal content
		        $scope.clearForm();
		         
		        // refresh the list
		        $scope.getAll();
		    });
		}
		// read products
		$scope.getAll = function(){
		    $http.get("angular_js/get_all").success(function(response){
		        $scope.names = response;
		    });
		}

		$scope.readOne = function(id) {
			$('#btn-create-product').hide();
			$('#btn-update-product').show();
			$('#btn-cancel').show();
			$http.post('angular_js/readone', {
		        'id' : id 
		    })
		    .success(function(data, status, headers, config){
		         
		        // put the values in form
		        $scope.id = data[0]["id"];
		        $scope.name = data[0]["name"];
		        // $scope.search= data[0]["name"];
		        $scope.description = data[0]["description"];
		        $scope.price = data[0]["price"];
		         
		        // show modal
		        $('#form-name').focus();
		    });

		}
		$scope.updateProduct = function() {
			$http.post('angular_js/updateProduct', {
		        'id' : $scope.id ,
		        'name':$scope.name,
		        'description':$scope.description,
		        'price':$scope.price
		    }).success(function(data, status, headers, config){
		    	$('#btn-create-product').show();
				$('#btn-update-product').hide();
				$('#btn-cancel').hide();
		    	$scope.clearForm();

		    	$scope.getAll();

		    });
		}

		$scope.deleteProduct = function(id) {
			if(confirm('Are You Sure?!')){
				$http.post('angular_js/deleteProduct', {
					'id':id
				}).success(function(data, status, headers, config){
					$scope.getAll();
				})
			}
		}

		$scope.cancel = function() {
			$('#btn-create-product').show();
			$('#btn-update-product').hide();
			$('#btn-cancel').hide();
			$scope.clearForm();
		}
	});

/*Module: tss_expenses*/
app.controller('expenseCtrl', function($scope, $http) {
	$scope.title="TSS Daily Expenses";
	$scope.id='-1';
	$scope.saveit= function() {
		$http.post('tss_expenses/save', {
			'id':$scope.id,
			'desc':$scope.desc,
			'amount':$scope.amount,
			'head':$scope.head
		}).success(function(data) {
			$scope.get_expenses();
			$scope.id='-1';
			$scope.desc='';
			$scope.amount='';
			$scope.head='';

			$("#desc").focus();
		});
	}

	$scope.get_expenses = function() {
		$http.get('tss_expenses/get_all').success(function(data) {
			$scope.expenses=data;
		})
	}

	$scope.select_box = function(id) {
		// $scope.boxes = [];
		// $scope.boxes.push($scope.toggled);
	  // angular.forEach($scope.expenses, function(box){
	  //   if (!!toggled.selected) $scope.boxes.push(e.exp_id);
	  // })

	  console.log($location);
	}

	app.controller('dynamicCtrl', function($scope, $http){
	});
})


/* Module: slugging */

app.controller('slugCtrl', function($scope, $http) {
	$scope.id='-1';
	$scope.createSlug = function() {
		$http.post('slugging/add_slug', {
			'id':$scope.id,
			'name':$scope.name,
			'slug':$scope.slug 
		}).success(function(data) {
			console.log('Success Fully Added');
		});
	}
});