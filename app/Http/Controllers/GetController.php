<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class GetController extends Controller
{
	public function index()
	{
		$access_token = '8mu9dgvlpxvagwc8kr97y7gdovfwebd';
		$store_hash = 'b5cvpaoito';

		$response = Http::withHeaders([
			'X-Auth-Token'=> $access_token,
		])->get('https://api.bigcommerce.com/stores/'.$store_hash.'/v3/catalog/products');

		$test = 'lorem ipsum';

		return view('welcome');
		// return $response->json();

		// $data = implode(" ", $response->json());

		// return view('welcome', [
		// 	'data' => $data
		// ]);
	}

	public function products()
	{
		$access_token = '8mu9dgvlpxvagwc8kr97y7gdovfwebd';
		$store_hash = 'b5cvpaoito';

		$response = Http::withHeaders([
			'X-Auth-Token'=> $access_token,
		])->get('https://api.bigcommerce.com/stores/'.$store_hash.'/v3/catalog/products');

		return $response->json();
		// return $response->json();

		// $data = implode(" ", $response->json());

		// return view('welcome', [
		// 	'data' => $data
		// ]);
	}

	public function images($productID)
	{
		$access_token = '8mu9dgvlpxvagwc8kr97y7gdovfwebd';
		$store_hash = 'b5cvpaoito';

		$response = Http::withHeaders([
			'X-Auth-Token'=> $access_token,
		])->get('https://api.bigcommerce.com/stores/'.$store_hash.'/v3/catalog/products/'.$productID.'/images');

		return $response->json();
		// return $response->json();

		// $data = implode(" ", $response->json());

		// return view('welcome', [
		// 	'data' => $data
		// ]);
	}
}