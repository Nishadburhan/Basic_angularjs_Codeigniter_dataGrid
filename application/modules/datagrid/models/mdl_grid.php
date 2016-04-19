<?php
class Mdl_grid extends CI_Model {
	function if_exist_awb($awb) {
		$this->db->where('pkg_awb',$awb);
		$query = $this->db->get('packages');
	    if ($query->num_rows() > 0){
	        return true;
	    }
	    else{
	        return false;
	    }
	}

	function save_data($data) {
		$this->db->insert('packages',$data);
	}

	function get_all() {
		return $this->db->get('packages');
	}
}