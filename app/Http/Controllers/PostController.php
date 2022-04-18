<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class PostController extends Controller
{
	const ACCESS_TOKEN = '8mu9dgvlpxvagwc8kr97y7gdovfwebd';
	const STORE_HASH = 'b5cvpaoito';

	public function cart(Request $request)
	{
		$data = $request->all();

		$response = Http::withHeaders([
			'X-Auth-Token'=> self::ACCESS_TOKEN,
			"Content-Type" => "application/json"
		])->withBody(
			json_encode($data), 'application/json'
		)->post('https://api.bigcommerce.com/stores/'.self::STORE_HASH.'/v3/carts');

		$cartID = $response['data']['id'];

		$responseUrl = Http::withHeaders([
			'X-Auth-Token'=> self::ACCESS_TOKEN,
		])->post('https://api.bigcommerce.com/stores/'.self::STORE_HASH.'/v3/carts/'.$cartID.'/redirect_urls');

		$cart_redirect_url = $responseUrl['data']['cart_url'];

		return $cart_redirect_url;
	}
}