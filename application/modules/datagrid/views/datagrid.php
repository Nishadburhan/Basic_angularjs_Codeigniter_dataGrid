<!DOCTYPE html>
<html ng-app="dataGrid">
<head>
	<title>AngularJS DataGrid</title>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/css/bootstrap.css">
</head>
<body>
	<div class="container-fluid">
		<div class="row">
		<controller ng-controller="datagridCtrl">
			<div class="col-md-8">
				<controller ng-controller="datagridCtrl">
					<h1>Add Package</h1>
					<span class="text text-success">{{suc_msg}}</span>
					<form ng-submit="add_package()">
						<div class="form-group">
							<div class="input-group">
						        <span class="input-group-addon">
						            AWB Number
						        </span>
						        <input class="form-control" type="text" ng-model="awb" placeholder="" required>
						        <span class="input-group-addon">
						            Origin
						        </span>
						        <input class="form-control" type="text" ng-model="origin" placeholder="" required>
						        <span class="input-group-addon">
						            Destination
						        </span>
						        <input class="form-control" type="text" ng-model="destin" placeholder="" required>
						        <span class="input-group-addon">
						            Consignee
						        </span>
						        <input class="form-control" type="text" ng-model="consignee" placeholder="" required>
						        <span class="input-group-addon">
						            Weight
						        </span>
						        <input class="form-control" type="text" ng-model="weight" placeholder="" required>
						    </div>
						</div>
						<div class="form-group">
							<input type="submit" class="btn btn-info" value="Scan" style="float: right;">
						</div>
						<span class="text text-danger">{{error_msg}}</span>

					</form>
					<br/>&nbsp;
					<div class="table responsive">
						<div class="form-group">
							<button class="btn btn-success" id="btn_save" ng-click="save_package()">Save Package</button>
						</div>
						<table class="table table-hover table-bordered">
							<thead>
								<th>#</th>
								<th>Awb</th>
								<th>Origin</th>
								<th>Destination</th>
								<th>Consignee</th>
								<th>Weight</th>
							</thead>
							<tbody>
								<tr ng-repeat="p in dynamic_ary">
									<td>{{$index + 1}}</td>
									<td>{{p.awb}}</td>
									<td>{{p.origin}}</td>
									<td>{{p.destin}}</td>
									<td>{{p.consignee}}</td>
									<td>{{p.weight}}</td>
								</tr>
							</tbody>
						</table>
					</div>

				
			</div>
			<div class="col-md-4" style="border-left: 1px solid #333">
				<h1>Mysql Table(packages)</h1>
				<div class="table-responsive">
					<table class="table table-hover table-bordered">
						<thead>
							<th>#</th>
							<th>Awb</th>
							<th>Origin</th>
							<th>Destination</th>
							<th>Consignee</th>
							<th>Weight</th>
						</thead>
						<tbody ng-init="show_packages()">
							<tr ng-repeat="x in table_data">
								<td>{{$index + 1}}</td>
								<td>{{x.awb}}</td>
								<td>{{x.origin}}</td>
								<td>{{x.destin}}</td>
								<td>{{x.consignee}}</td>
								<td>{{x.weight}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			</controller>
		</div>
	</div>

<script src="<?php echo base_url();?>assets/js/jquery-1.12.2.min.js"></script>
<script src="<?php echo base_url();?>assets/js/bootstrap.min.js"></script>
<script src="<?php echo base_url();?>assets/js/angular.min.js"></script>
<script src="<?php echo base_url();?>assets/js/app.js"></script>
</body>
</html>