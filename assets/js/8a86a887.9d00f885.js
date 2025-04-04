"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1156],{1275:e=>{e.exports=JSON.parse('{"url":"redocusaurus/customerportal-api.yaml","themeId":"theme-redoc","isSpecFile":true,"normalizeUrl":true,"spec":{"openapi":"3.1.0","info":{"title":"StuStaPay Customer Portal API","license":{"name":"AGPL-3.0"},"version":"0.1.0"},"paths":{"/auth/login":{"post":{"tags":["auth"],"summary":"customer login with wristband hardware tag and pin","operationId":"login","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/LoginPayload"}}},"required":true},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/LoginResponse"}}}},"404":{"description":"Not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/auth/logout":{"post":{"tags":["auth"],"summary":"sign out of the current session","operationId":"logout","responses":{"204":{"description":"Successful Response"},"404":{"description":"Not found"}},"security":[{"OAuth2PasswordBearer":[]}]}},"/customer":{"get":{"tags":["base"],"summary":"Obtain customer","operationId":"get_customer","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Customer"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"}},"security":[{"OAuth2PasswordBearer":[]}]}},"/orders_with_bon":{"get":{"tags":["base"],"summary":"Obtain customer orders","operationId":"get_orders","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/OrderWithBon"},"type":"array","title":"Response Get Orders Orders With Bon Get"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"}},"security":[{"OAuth2PasswordBearer":[]}]}},"/customer_info":{"post":{"tags":["base"],"summary":"set iban, account name and email","operationId":"update_customer_info","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CustomerBank"}}},"required":true},"responses":{"204":{"description":"Successful Response"},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}},"security":[{"OAuth2PasswordBearer":[]}]}},"/customer_all_donation":{"post":{"tags":["base"],"summary":"shortcut to declare that customer wants to donate all of the remaining balance","operationId":"update_customer_info_donate_all","responses":{"204":{"description":"Successful Response"},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"}},"security":[{"OAuth2PasswordBearer":[]}]}},"/payout_info":{"get":{"tags":["base"],"summary":"info about current state of payout","operationId":"payout_info","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PayoutInfo"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"}},"security":[{"OAuth2PasswordBearer":[]}]}},"/get_payout_transactions":{"get":{"tags":["base"],"summary":"transactions booked for payout if payout already happened","operationId":"get_payout_transactions","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/PayoutTransaction"},"type":"array","title":"Response Get Payout Transactions Get Payout Transactions Get"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"}},"security":[{"OAuth2PasswordBearer":[]}]}},"/config":{"get":{"tags":["base"],"summary":"get customer customer portal config","operationId":"get_customer_config","parameters":[{"name":"base_url","in":"query","required":true,"schema":{"type":"string","title":"Base Url"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CustomerPortalApiConfig"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/bon/{order_uuid}":{"get":{"tags":["base"],"summary":"Retrieve a bon","operationId":"get_bon","parameters":[{"name":"order_uuid","in":"path","required":true,"schema":{"type":"string","title":"Order Uuid"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BonJson"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/sumup/create-checkout":{"post":{"tags":["sumup"],"summary":"initiate customer checkout","operationId":"create_checkout","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateCheckoutPayload"}}},"required":true},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateCheckoutResponse"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}},"security":[{"OAuth2PasswordBearer":[]}]}},"/sumup/check-checkout":{"post":{"tags":["sumup"],"summary":"after payment check checkout state","operationId":"check_checkout","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CheckCheckoutPayload"}}},"required":true},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CheckCheckoutResponse"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}},"security":[{"OAuth2PasswordBearer":[]}]}}},"components":{"schemas":{"AccountType":{"type":"string","enum":["private","sale_exit","cash_entry","cash_exit","cash_topup_source","cash_imbalance","cash_vault","sumup_entry","sumup_online_entry","transport","voucher_create","donation_exit","sepa_exit","cash_register"],"title":"AccountType"},"BonConfig":{"properties":{"title":{"type":"string","title":"Title"},"issuer":{"type":"string","title":"Issuer"},"address":{"type":"string","title":"Address"},"ust_id":{"type":"string","title":"Ust Id"}},"type":"object","required":["title","issuer","address","ust_id"],"title":"BonConfig"},"BonJson":{"properties":{"order":{"$ref":"#/components/schemas/OrderWithTse"},"tax_rate_aggregations":{"items":{"$ref":"#/components/schemas/TaxRateAggregation"},"type":"array","title":"Tax Rate Aggregations"},"config":{"$ref":"#/components/schemas/BonConfig"},"currency_identifier":{"type":"string","title":"Currency Identifier"}},"type":"object","required":["order","tax_rate_aggregations","config","currency_identifier"],"title":"BonJson"},"CheckCheckoutPayload":{"properties":{"order_uuid":{"type":"string","format":"uuid","title":"Order Uuid"}},"type":"object","required":["order_uuid"],"title":"CheckCheckoutPayload"},"CheckCheckoutResponse":{"properties":{"status":{"$ref":"#/components/schemas/SumUpCheckoutStatus"}},"type":"object","required":["status"],"title":"CheckCheckoutResponse"},"CreateCheckoutPayload":{"properties":{"amount":{"type":"number","title":"Amount"}},"type":"object","required":["amount"],"title":"CreateCheckoutPayload"},"CreateCheckoutResponse":{"properties":{"checkout_id":{"type":"string","title":"Checkout Id"},"order_uuid":{"type":"string","format":"uuid","title":"Order Uuid"}},"type":"object","required":["checkout_id","order_uuid"],"title":"CreateCheckoutResponse"},"Customer":{"properties":{"node_id":{"type":"integer","title":"Node Id"},"id":{"type":"integer","title":"Id"},"type":{"$ref":"#/components/schemas/AccountType"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Name"},"comment":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Comment"},"balance":{"type":"number","title":"Balance"},"vouchers":{"type":"integer","title":"Vouchers"},"user_tag_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"User Tag Id"},"user_tag_uid":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"User Tag Uid"},"user_tag_comment":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"User Tag Comment"},"restriction":{"anyOf":[{"$ref":"#/components/schemas/ProductRestriction"},{"type":"null"}]},"tag_history":{"items":{"$ref":"#/components/schemas/UserTagHistoryEntry"},"type":"array","title":"Tag History"},"iban":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Iban"},"account_name":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Account Name"},"email":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Email"},"donation":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Donation"},"payout_export":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Payout Export"},"user_tag_pin":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"User Tag Pin"},"donate_all":{"type":"boolean","title":"Donate All"},"has_entered_info":{"type":"boolean","title":"Has Entered Info"},"payout":{"anyOf":[{"$ref":"#/components/schemas/Payout"},{"type":"null"}]},"user_tag_uid_hex":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"User Tag Uid Hex","readOnly":true}},"type":"object","required":["node_id","id","type","name","comment","balance","vouchers","user_tag_id","user_tag_uid","restriction","tag_history","iban","account_name","email","donation","payout_export","user_tag_pin","donate_all","has_entered_info","payout","user_tag_uid_hex"],"title":"Customer"},"CustomerBank":{"properties":{"iban":{"type":"string","title":"Iban"},"account_name":{"type":"string","title":"Account Name"},"email":{"type":"string","title":"Email"},"donation":{"type":"number","title":"Donation","default":0}},"type":"object","required":["iban","account_name","email"],"title":"CustomerBank"},"CustomerPortalApiConfig":{"properties":{"test_mode":{"type":"boolean","title":"Test Mode"},"test_mode_message":{"type":"string","title":"Test Mode Message"},"data_privacy_url":{"type":"string","title":"Data Privacy Url"},"contact_email":{"type":"string","format":"email","title":"Contact Email"},"about_page_url":{"type":"string","title":"About Page Url"},"payout_enabled":{"type":"boolean","title":"Payout Enabled"},"currency_identifier":{"type":"string","title":"Currency Identifier"},"sumup_topup_enabled":{"type":"boolean","title":"Sumup Topup Enabled"},"allowed_country_codes":{"anyOf":[{"items":{"type":"string"},"type":"array"},{"type":"null"}],"title":"Allowed Country Codes"},"translation_texts":{"additionalProperties":{"additionalProperties":{"type":"string"},"type":"object"},"propertyNames":{"$ref":"#/components/schemas/Language"},"type":"object","title":"Translation Texts"}},"type":"object","required":["test_mode","test_mode_message","data_privacy_url","contact_email","about_page_url","payout_enabled","currency_identifier","sumup_topup_enabled","allowed_country_codes","translation_texts"],"title":"CustomerPortalApiConfig"},"HTTPValidationError":{"properties":{"detail":{"items":{"$ref":"#/components/schemas/ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"},"Language":{"type":"string","enum":["en-US","de-DE"],"title":"Language"},"LineItem":{"properties":{"quantity":{"type":"integer","title":"Quantity"},"product":{"$ref":"#/components/schemas/Product"},"product_price":{"type":"number","title":"Product Price"},"tax_rate_id":{"type":"integer","title":"Tax Rate Id"},"tax_name":{"type":"string","title":"Tax Name"},"tax_rate":{"type":"number","title":"Tax Rate"},"item_id":{"type":"integer","title":"Item Id"},"total_tax":{"type":"number","title":"Total Tax"},"total_price":{"type":"number","title":"Total Price","readOnly":true}},"type":"object","required":["quantity","product","product_price","tax_rate_id","tax_name","tax_rate","item_id","total_tax","total_price"],"title":"LineItem"},"LoginPayload":{"properties":{"pin":{"type":"string","title":"Pin"}},"type":"object","required":["pin"],"title":"LoginPayload"},"LoginResponse":{"properties":{"customer":{"$ref":"#/components/schemas/Customer"},"access_token":{"type":"string","title":"Access Token"},"grant_type":{"type":"string","title":"Grant Type","default":"bearer"}},"type":"object","required":["customer","access_token"],"title":"LoginResponse"},"OrderType":{"type":"string","enum":["sale","cancel_sale","top_up","pay_out","ticket","money_transfer","money_transfer_imbalance","cashier_shift_start","cashier_shift_end"],"title":"OrderType"},"OrderWithBon":{"properties":{"id":{"type":"integer","title":"Id"},"uuid":{"type":"string","format":"uuid","title":"Uuid"},"total_price":{"type":"number","title":"Total Price"},"total_tax":{"type":"number","title":"Total Tax"},"total_no_tax":{"type":"number","title":"Total No Tax"},"cancels_order":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Cancels Order"},"booked_at":{"type":"string","format":"date-time","title":"Booked At"},"payment_method":{"$ref":"#/components/schemas/PaymentMethod"},"order_type":{"$ref":"#/components/schemas/OrderType"},"cashier_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Cashier Id"},"till_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Till Id"},"cash_register_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Cash Register Id"},"customer_account_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Customer Account Id"},"customer_tag_uid":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Customer Tag Uid"},"customer_tag_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Customer Tag Id"},"line_items":{"items":{"$ref":"#/components/schemas/LineItem"},"type":"array","title":"Line Items"},"bon_generated":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Bon Generated"},"customer_tag_uid_hex":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Customer Tag Uid Hex","readOnly":true}},"type":"object","required":["id","uuid","total_price","total_tax","total_no_tax","cancels_order","booked_at","payment_method","order_type","cashier_id","till_id","cash_register_id","customer_account_id","customer_tag_uid","customer_tag_id","line_items","bon_generated","customer_tag_uid_hex"],"title":"OrderWithBon"},"OrderWithTse":{"properties":{"id":{"type":"integer","title":"Id"},"uuid":{"type":"string","format":"uuid","title":"Uuid"},"total_price":{"type":"number","title":"Total Price"},"total_tax":{"type":"number","title":"Total Tax"},"total_no_tax":{"type":"number","title":"Total No Tax"},"cancels_order":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Cancels Order"},"booked_at":{"type":"string","format":"date-time","title":"Booked At"},"payment_method":{"$ref":"#/components/schemas/PaymentMethod"},"order_type":{"$ref":"#/components/schemas/OrderType"},"cashier_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Cashier Id"},"till_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Till Id"},"cash_register_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Cash Register Id"},"customer_account_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Customer Account Id"},"customer_tag_uid":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Customer Tag Uid"},"customer_tag_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Customer Tag Id"},"line_items":{"items":{"$ref":"#/components/schemas/LineItem"},"type":"array","title":"Line Items"},"signature_status":{"type":"string","title":"Signature Status"},"transaction_process_type":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Transaction Process Type"},"transaction_process_data":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Transaction Process Data"},"tse_transaction":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Tse Transaction"},"tse_signaturenr":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Tse Signaturenr"},"tse_start":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Tse Start"},"tse_end":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Tse End"},"tse_hashalgo":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Tse Hashalgo"},"tse_time_format":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Tse Time Format"},"tse_signature":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Tse Signature"},"tse_public_key":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Tse Public Key"},"node_id":{"type":"integer","title":"Node Id"},"customer_tag_uid_hex":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Customer Tag Uid Hex","readOnly":true},"tse_qr_code_text":{"type":"string","title":"Tse Qr Code Text","readOnly":true}},"type":"object","required":["id","uuid","total_price","total_tax","total_no_tax","cancels_order","booked_at","payment_method","order_type","cashier_id","till_id","cash_register_id","customer_account_id","customer_tag_uid","customer_tag_id","line_items","signature_status","node_id","customer_tag_uid_hex","tse_qr_code_text"],"title":"OrderWithTse"},"PaymentMethod":{"type":"string","enum":["cash","sumup","tag","sumup_online"],"title":"PaymentMethod"},"Payout":{"properties":{"id":{"type":"integer","title":"Id"},"customer_account_id":{"type":"integer","title":"Customer Account Id"},"iban":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Iban"},"account_name":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Account Name"},"email":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Email"},"user_tag_id":{"type":"integer","title":"User Tag Id"},"user_tag_uid":{"type":"integer","title":"User Tag Uid"},"amount":{"type":"number","title":"Amount"},"donation":{"type":"number","title":"Donation"},"payout_run_id":{"type":"integer","title":"Payout Run Id"},"user_tag_uid_hex":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"User Tag Uid Hex","readOnly":true}},"type":"object","required":["id","customer_account_id","iban","account_name","email","user_tag_id","user_tag_uid","amount","donation","payout_run_id","user_tag_uid_hex"],"title":"Payout"},"PayoutInfo":{"properties":{"in_payout_run":{"type":"boolean","title":"In Payout Run"},"payout_date":{"anyOf":[{"type":"string","format":"date-time"},{"type":"null"}],"title":"Payout Date"}},"type":"object","required":["in_payout_run","payout_date"],"title":"PayoutInfo"},"PayoutTransaction":{"properties":{"amount":{"type":"number","title":"Amount"},"booked_at":{"type":"string","format":"date-time","title":"Booked At"},"target_account_name":{"type":"string","title":"Target Account Name"},"target_account_type":{"type":"string","title":"Target Account Type"},"transaction_id":{"type":"integer","title":"Transaction Id"}},"type":"object","required":["amount","booked_at","target_account_name","target_account_type","transaction_id"],"title":"PayoutTransaction"},"Product":{"properties":{"name":{"type":"string","title":"Name"},"price":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Price"},"fixed_price":{"type":"boolean","title":"Fixed Price"},"price_in_vouchers":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Price In Vouchers"},"tax_rate_id":{"type":"integer","title":"Tax Rate Id"},"restrictions":{"items":{"$ref":"#/components/schemas/ProductRestriction"},"type":"array","title":"Restrictions"},"is_locked":{"type":"boolean","title":"Is Locked"},"is_returnable":{"type":"boolean","title":"Is Returnable"},"target_account_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Target Account Id"},"node_id":{"type":"integer","title":"Node Id"},"id":{"type":"integer","title":"Id"},"tax_name":{"type":"string","title":"Tax Name"},"tax_rate":{"type":"number","title":"Tax Rate"},"type":{"$ref":"#/components/schemas/ProductType"},"price_per_voucher":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Price Per Voucher"}},"type":"object","required":["name","price","fixed_price","tax_rate_id","restrictions","is_locked","is_returnable","node_id","id","tax_name","tax_rate","type"],"title":"Product"},"ProductRestriction":{"type":"string","enum":["under_16","under_18"],"title":"ProductRestriction"},"ProductType":{"type":"string","enum":["discount","topup","payout","money_transfer","imbalance","user_defined","ticket"],"title":"ProductType"},"SumUpCheckoutStatus":{"type":"string","enum":["PENDING","FAILED","PAID"],"title":"SumUpCheckoutStatus"},"TaxRateAggregation":{"properties":{"tax_name":{"type":"string","title":"Tax Name"},"tax_rate":{"type":"number","title":"Tax Rate"},"total_price":{"type":"number","title":"Total Price"},"total_tax":{"type":"number","title":"Total Tax"},"total_no_tax":{"type":"number","title":"Total No Tax"}},"type":"object","required":["tax_name","tax_rate","total_price","total_tax","total_no_tax"],"title":"TaxRateAggregation"},"UserTagHistoryEntry":{"properties":{"user_tag_id":{"type":"integer","title":"User Tag Id"},"user_tag_pin":{"type":"string","title":"User Tag Pin"},"user_tag_uid":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"User Tag Uid"},"account_id":{"type":"integer","title":"Account Id"},"comment":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Comment"},"mapping_was_valid_until":{"type":"string","format":"date-time","title":"Mapping Was Valid Until"},"user_tag_uid_hex":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"User Tag Uid Hex","readOnly":true}},"type":"object","required":["user_tag_id","user_tag_pin","user_tag_uid","account_id","mapping_was_valid_until","user_tag_uid_hex"],"title":"UserTagHistoryEntry"},"ValidationError":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"}},"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"auth/login"}}}}}}}')}}]);