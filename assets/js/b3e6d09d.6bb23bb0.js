"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1695],{4366:e=>{e.exports=JSON.parse('{"url":"redocusaurus/customerportal-api.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.1.0","info":{"title":"StuStaPay Customer Portal API","license":{"name":"AGPL-3.0"},"version":"0.1.0"},"paths":{"/auth/login":{"post":{"tags":["auth"],"summary":"customer login with wristband hardware tag and pin","operationId":"login","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/LoginPayload"}}},"required":true},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/LoginResponse"}}}},"404":{"description":"Not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/auth/logout":{"post":{"tags":["auth"],"summary":"sign out of the current session","operationId":"logout","responses":{"204":{"description":"Successful Response"},"404":{"description":"Not found"}},"security":[{"OAuth2PasswordBearer":[]}]}},"/customer":{"get":{"tags":["base"],"summary":"Obtain customer","operationId":"get_customer","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Customer"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"}},"security":[{"OAuth2PasswordBearer":[]}]}},"/orders_with_bon":{"get":{"tags":["base"],"summary":"Obtain customer orders","operationId":"get_orders","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/OrderWithBon"},"type":"array","title":"Response Get Orders Orders With Bon Get"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"}},"security":[{"OAuth2PasswordBearer":[]}]}},"/customer_info":{"post":{"tags":["base"],"summary":"set iban, account name and email","operationId":"update_customer_info","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CustomerBank"}}},"required":true},"responses":{"204":{"description":"Successful Response"},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}},"security":[{"OAuth2PasswordBearer":[]}]}},"/customer_all_donation":{"post":{"tags":["base"],"summary":"shortcut to declare that customer wants to donate all of the remaining balance","operationId":"update_customer_info_donate_all","responses":{"204":{"description":"Successful Response"},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"}},"security":[{"OAuth2PasswordBearer":[]}]}},"/config":{"get":{"tags":["base"],"summary":"get customer customer portal config","operationId":"get_customer_config","parameters":[{"name":"base_url","in":"query","required":true,"schema":{"type":"string","title":"Base Url"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CustomerPortalApiConfig"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/bon/{bon_id}":{"get":{"tags":["base"],"summary":"Retrieve a bon","operationId":"get_bon","security":[{"OAuth2PasswordBearer":[]}],"parameters":[{"name":"bon_id","in":"path","required":true,"schema":{"type":"integer","title":"Bon Id"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/sumup/create-checkout":{"post":{"tags":["sumup"],"summary":"initiate customer checkout","operationId":"create_checkout","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateCheckoutPayload"}}},"required":true},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateCheckoutResponse"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}},"security":[{"OAuth2PasswordBearer":[]}]}},"/sumup/check-checkout":{"post":{"tags":["sumup"],"summary":"after payment check checkout state","operationId":"check_checkout","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CheckCheckoutPayload"}}},"required":true},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CheckCheckoutResponse"}}}},"401":{"description":"unauthorized"},"403":{"description":"forbidden"},"404":{"description":"not found"},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}},"security":[{"OAuth2PasswordBearer":[]}]}}},"components":{"schemas":{"AccountType":{"type":"string","enum":["private","sale_exit","cash_entry","cash_exit","cash_topup_source","cash_imbalance","cash_vault","sumup_entry","sumup_online_entry","transport","cashier","voucher_create"],"title":"AccountType"},"CheckCheckoutPayload":{"properties":{"checkout_id":{"type":"string","title":"Checkout Id"}},"type":"object","required":["checkout_id"],"title":"CheckCheckoutPayload"},"CheckCheckoutResponse":{"properties":{"status":{"$ref":"#/components/schemas/SumUpCheckoutStatus"}},"type":"object","required":["status"],"title":"CheckCheckoutResponse"},"CreateCheckoutPayload":{"properties":{"amount":{"type":"number","title":"Amount"}},"type":"object","required":["amount"],"title":"CreateCheckoutPayload"},"CreateCheckoutResponse":{"properties":{"checkout_id":{"type":"string","title":"Checkout Id"}},"type":"object","required":["checkout_id"],"title":"CreateCheckoutResponse"},"Customer":{"properties":{"node_id":{"type":"integer","title":"Node Id"},"id":{"type":"integer","title":"Id"},"type":{"$ref":"#/components/schemas/AccountType"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Name"},"comment":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Comment"},"balance":{"type":"number","title":"Balance"},"vouchers":{"type":"integer","title":"Vouchers"},"user_tag_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"User Tag Id"},"user_tag_uid":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"User Tag Uid"},"user_tag_comment":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"User Tag Comment"},"restriction":{"anyOf":[{"$ref":"#/components/schemas/ProductRestriction"},{"type":"null"}]},"tag_history":{"items":{"$ref":"#/components/schemas/UserTagHistoryEntry"},"type":"array","title":"Tag History"},"iban":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Iban"},"account_name":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Account Name"},"email":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Email"},"donation":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Donation"},"payout_error":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Payout Error"},"payout_run_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Payout Run Id"},"payout_export":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Payout Export"},"user_tag_pin":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"User Tag Pin"},"user_tag_uid_hex":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"User Tag Uid Hex","readOnly":true}},"type":"object","required":["node_id","id","type","name","comment","balance","vouchers","user_tag_id","user_tag_uid","restriction","tag_history","iban","account_name","email","donation","payout_error","payout_run_id","payout_export","user_tag_pin","user_tag_uid_hex"],"title":"Customer"},"CustomerBank":{"properties":{"iban":{"type":"string","title":"Iban"},"account_name":{"type":"string","title":"Account Name"},"email":{"type":"string","title":"Email"},"donation":{"type":"number","title":"Donation","default":0}},"type":"object","required":["iban","account_name","email"],"title":"CustomerBank"},"CustomerPortalApiConfig":{"properties":{"test_mode":{"type":"boolean","title":"Test Mode"},"test_mode_message":{"type":"string","title":"Test Mode Message"},"data_privacy_url":{"type":"string","title":"Data Privacy Url"},"contact_email":{"type":"string","title":"Contact Email"},"about_page_url":{"type":"string","title":"About Page Url"},"payout_enabled":{"type":"boolean","title":"Payout Enabled"},"sumup_topup_enabled":{"type":"boolean","title":"Sumup Topup Enabled"},"allowed_country_codes":{"anyOf":[{"items":{"type":"string"},"type":"array"},{"type":"null"}],"title":"Allowed Country Codes"},"translation_texts":{"additionalProperties":{"additionalProperties":{"type":"string"},"type":"object"},"type":"object","title":"Translation Texts"}},"type":"object","required":["test_mode","test_mode_message","data_privacy_url","contact_email","about_page_url","payout_enabled","sumup_topup_enabled","allowed_country_codes","translation_texts"],"title":"CustomerPortalApiConfig"},"HTTPValidationError":{"properties":{"detail":{"items":{"$ref":"#/components/schemas/ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"},"Language":{"type":"string","enum":["en-US","de-DE"],"title":"Language"},"LineItem":{"properties":{"quantity":{"type":"integer","title":"Quantity"},"product":{"$ref":"#/components/schemas/Product"},"product_price":{"type":"number","title":"Product Price"},"tax_rate_id":{"type":"integer","title":"Tax Rate Id"},"tax_name":{"type":"string","title":"Tax Name"},"tax_rate":{"type":"number","title":"Tax Rate"},"item_id":{"type":"integer","title":"Item Id"},"total_tax":{"type":"number","title":"Total Tax"},"total_price":{"type":"number","title":"Total Price","readOnly":true}},"type":"object","required":["quantity","product","product_price","tax_rate_id","tax_name","tax_rate","item_id","total_tax","total_price"],"title":"LineItem"},"LoginPayload":{"properties":{"pin":{"type":"string","title":"Pin"}},"type":"object","required":["pin"],"title":"LoginPayload"},"LoginResponse":{"properties":{"customer":{"$ref":"#/components/schemas/Customer"},"access_token":{"type":"string","title":"Access Token"},"grant_type":{"type":"string","title":"Grant Type","default":"bearer"}},"type":"object","required":["customer","access_token"],"title":"LoginResponse"},"OrderType":{"type":"string","enum":["sale","cancel_sale","top_up","pay_out","ticket","money_transfer","money_transfer_imbalance"],"title":"OrderType"},"OrderWithBon":{"properties":{"id":{"type":"integer","title":"Id"},"uuid":{"type":"string","format":"uuid","title":"Uuid"},"total_price":{"type":"number","title":"Total Price"},"total_tax":{"type":"number","title":"Total Tax"},"total_no_tax":{"type":"number","title":"Total No Tax"},"cancels_order":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Cancels Order"},"booked_at":{"type":"string","format":"date-time","title":"Booked At"},"payment_method":{"$ref":"#/components/schemas/PaymentMethod"},"order_type":{"$ref":"#/components/schemas/OrderType"},"cashier_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Cashier Id"},"till_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Till Id"},"customer_account_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Customer Account Id"},"customer_tag_uid":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Customer Tag Uid"},"customer_tag_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Customer Tag Id"},"line_items":{"items":{"$ref":"#/components/schemas/LineItem"},"type":"array","title":"Line Items"},"bon_generated":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Bon Generated"},"customer_tag_uid_hex":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Customer Tag Uid Hex","readOnly":true}},"type":"object","required":["id","uuid","total_price","total_tax","total_no_tax","cancels_order","booked_at","payment_method","order_type","cashier_id","till_id","customer_account_id","customer_tag_uid","customer_tag_id","line_items","bon_generated","customer_tag_uid_hex"],"title":"OrderWithBon"},"PaymentMethod":{"type":"string","enum":["cash","sumup","tag","sumup_online"],"title":"PaymentMethod"},"Product":{"properties":{"name":{"type":"string","title":"Name"},"price":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Price"},"fixed_price":{"type":"boolean","title":"Fixed Price"},"price_in_vouchers":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Price In Vouchers"},"tax_rate_id":{"type":"integer","title":"Tax Rate Id"},"restrictions":{"items":{"$ref":"#/components/schemas/ProductRestriction"},"type":"array","title":"Restrictions"},"is_locked":{"type":"boolean","title":"Is Locked"},"is_returnable":{"type":"boolean","title":"Is Returnable"},"target_account_id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Target Account Id"},"node_id":{"type":"integer","title":"Node Id"},"id":{"type":"integer","title":"Id"},"tax_name":{"type":"string","title":"Tax Name"},"tax_rate":{"type":"number","title":"Tax Rate"},"type":{"$ref":"#/components/schemas/ProductType"},"price_per_voucher":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Price Per Voucher"}},"type":"object","required":["name","price","fixed_price","tax_rate_id","restrictions","is_locked","is_returnable","node_id","id","tax_name","tax_rate","type"],"title":"Product"},"ProductRestriction":{"type":"string","enum":["under_16","under_18"],"title":"ProductRestriction"},"ProductType":{"type":"string","enum":["discount","topup","payout","money_transfer","imbalance","user_defined","ticket"],"title":"ProductType"},"SumUpCheckoutStatus":{"type":"string","enum":["PENDING","FAILED","PAID"],"title":"SumUpCheckoutStatus"},"UserTagHistoryEntry":{"properties":{"user_tag_id":{"type":"integer","title":"User Tag Id"},"user_tag_pin":{"type":"string","title":"User Tag Pin"},"user_tag_uid":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"User Tag Uid"},"account_id":{"type":"integer","title":"Account Id"},"comment":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Comment"},"mapping_was_valid_until":{"type":"string","format":"date-time","title":"Mapping Was Valid Until"},"user_tag_uid_hex":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"User Tag Uid Hex","readOnly":true}},"type":"object","required":["user_tag_id","user_tag_pin","user_tag_uid","account_id","mapping_was_valid_until","user_tag_uid_hex"],"title":"UserTagHistoryEntry"},"ValidationError":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"}},"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"auth/login"}}}}}}}')}}]);