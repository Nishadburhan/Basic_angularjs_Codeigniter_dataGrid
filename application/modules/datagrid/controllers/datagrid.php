<?php
class Datagrid extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->model('mdl_grid');
	}

	function index() {
		$this->load->view('datagrid');
	}

	function show_all() {
		$data=array();
		foreach ($this->mdl_grid->get_all()->result() as $row) {
			$data[]=array(
				'awb'=>$row->pkg_awb,
				'origin'=>$row->pkg_origin,
				'destin'=>$row->pkg_destination,
				'consignee'=>$row->pkg_consignee,
				'weight'=>$row->pkg_weight
				);
		}
		echo json_encode($data);
	}

	function if_exist_in_table() {

		$obj=json_decode(file_get_contents("php://input"));
		$data=array();
		if($this->mdl_grid->if_exist_awb($obj->awb)) {
			$data=true;
		}else {
			$data=false;
		}
		echo json_encode($data);
	}

	function save_package_data() {
		$data=array();
		foreach ($_POST['items'] as $key => $value) {
			$data=array(
				'pkg_awb'=>$value['awb'],
				'pkg_origin'=>$value['origin'],
				'pkg_destination'=>$value['destin'],
				'pkg_consignee'=>$value['consignee'],
				'pkg_weight'=>$value['weight']
				);

			if($this->mdl_grid->save_data($data)) {
				$data=true;
			}else {
				$data=false;
			}
		}
		echo json_encode($data);
	}
}