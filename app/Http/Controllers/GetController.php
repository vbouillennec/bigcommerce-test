<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class GetController extends Controller
{
	const ACCESS_TOKEN = '8mu9dgvlpxvagwc8kr97y7gdovfwebd';
	const STORE_HASH = 'b5cvpaoito';

	public function index()
	{
		$response = Http::withHeaders([
			'X-Auth-Token'=> self::ACCESS_TOKEN,
		])->get('https://api.bigcommerce.com/stores/'.self::STORE_HASH.'/v3/catalog/products');

		return view('welcome');
	}

	public function products()
	{
		$response = Http::withHeaders([
			'X-Auth-Token'=> self::ACCESS_TOKEN,
		])->get('https://api.bigcommerce.com/stores/'.self::STORE_HASH.'/v3/catalog/products');

		return $response->json();
	}

	public function images($productID)
	{
		$response = Http::withHeaders([
			'X-Auth-Token'=> self::ACCESS_TOKEN,
		])->get('https://api.bigcommerce.com/stores/'.self::STORE_HASH.'/v3/catalog/products/'.$productID.'/images');

		return $response->json();
	}
}