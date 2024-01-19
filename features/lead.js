const pactum = require("pactum")
const { Before, Given, When, Then } = require("@cucumber/cucumber");
const post = "POST"

Before(() => {
    spec = pactum.spec();
});


pactum.stash.addDataTemplate(
    {
        LeadPass:
        {
            "customeR_NAME": "Ajith",
            "dealeR_ID": "string",
            "mobilE_NUMBER": "9047981343",
            "emaiL_ID": "string",
            "enquirY_DATE": "2024-01-19 01:00:00.000",
            "city": "string",
            "utm_source": "string",
            "utm_medium": "string",
            "utm_campaign": "string",
            "gclid": "string",
            "language_code": "string",
            "source": "string",
            "sourcE_ID": 1,
            "area": "string",
            "brand_code": 1,
            "modeL_ID": "string",
            "parT_ID": "string",
            "customeR_VOICE": "string",
            "brancH_ID": "",
            "addresS_LINE1": "string",
            "utm_term": "string",
            "utm_content": "string",
            "parm1": "string",
            "parm2": "string",
            "parm3": "string",
            "parm4": "string",
            "parm5": "string",
            "customeR_STATE": "string",
            "finance": "string",
            "pincode": "string",
            "finance_Company": "string",
            "intentforPurchase": "string",
            "device": "string",
            "crM_INTERNET_ENQUIRY_ID": "string",
            "transactionId": "string",
            "category": "string",
            "payment_type": "string",
            "booking_amount": 0,
            "payment_status": "string",
            "is_crm_request": "string"
        }
        
    }
)
pactum.stash.addDataTemplate(
    {
        Mobilenumbernotpresent:
        {
            "customeR_NAME": "Ajith",
            "dealeR_ID": "string",
            "mobilE_NUMBER": "",
            "emaiL_ID": "string",
            "enquirY_DATE": "2024-01-19 01:00:00.000",
            "city": "string",
            "utm_source": "string",
            "utm_medium": "string",
            "utm_campaign": "string",
            "gclid": "string",
            "language_code": "string",
            "source": "string",
            "sourcE_ID": 1,
            "area": "string",
            "brand_code": 1,
            "modeL_ID": "string",
            "parT_ID": "string",
            "customeR_VOICE": "string",
            "brancH_ID": "",
            "addresS_LINE1": "string",
            "utm_term": "string",
            "utm_content": "string",
            "parm1": "string",
            "parm2": "string",
            "parm3": "string",
            "parm4": "string",
            "parm5": "string",
            "customeR_STATE": "string",
            "finance": "string",
            "pincode": "string",
            "finance_Company": "string",
            "intentforPurchase": "string",
            "device": "string",
            "crM_INTERNET_ENQUIRY_ID": "string",
            "transactionId": "string",
            "category": "string",
            "payment_type": "string",
            "booking_amount": 0,
            "payment_status": "string",
            "is_crm_request": "string"
        }

    }
)
pactum.stash.addDataTemplate(
    {
        InvalidMobilenumber:
        {
            "customeR_NAME": "Ajith",
            "dealeR_ID": "string",
            "mobilE_NUMBER": "9047",
            "emaiL_ID": "string",
            "enquirY_DATE": "2024-01-19 01:00:00.000",
            "city": "string",
            "utm_source": "string",
            "utm_medium": "string",
            "utm_campaign": "string",
            "gclid": "string",
            "language_code": "string",
            "source": "string",
            "sourcE_ID": 1,
            "area": "string",
            "brand_code": 1,
            "modeL_ID": "string",
            "parT_ID": "string",
            "customeR_VOICE": "string",
            "brancH_ID": "",
            "addresS_LINE1": "string",
            "utm_term": "string",
            "utm_content": "string",
            "parm1": "string",
            "parm2": "string",
            "parm3": "string",
            "parm4": "string",
            "parm5": "string",
            "customeR_STATE": "string",
            "finance": "string",
            "pincode": "string",
            "finance_Company": "string",
            "intentforPurchase": "string",
            "device": "string",
            "crM_INTERNET_ENQUIRY_ID": "string",
            "transactionId": "string",
            "category": "string",
            "payment_type": "string",
            "booking_amount": 0,
            "payment_status": "string",
            "is_crm_request": "string"
        }

    }
)
pactum.stash.addDataTemplate(
    {
        NamenotPresent:
        {
            "customeR_NAME": "",
            "dealeR_ID": "string",
            "mobilE_NUMBER": "9047981343",
            "emaiL_ID": "string",
            "enquirY_DATE": "2024-01-19 01:00:00.000",
            "city": "string",
            "utm_source": "string",
            "utm_medium": "string",
            "utm_campaign": "string",
            "gclid": "string",
            "language_code": "string",
            "source": "string",
            "sourcE_ID": 1,
            "area": "string",
            "brand_code": 1,
            "modeL_ID": "string",
            "parT_ID": "string",
            "customeR_VOICE": "string",
            "brancH_ID": "",
            "addresS_LINE1": "string",
            "utm_term": "string",
            "utm_content": "string",
            "parm1": "string",
            "parm2": "string",
            "parm3": "string",
            "parm4": "string",
            "parm5": "string",
            "customeR_STATE": "string",
            "finance": "string",
            "pincode": "string",
            "finance_Company": "string",
            "intentforPurchase": "string",
            "device": "string",
            "crM_INTERNET_ENQUIRY_ID": "string",
            "transactionId": "string",
            "category": "string",
            "payment_type": "string",
            "booking_amount": 0,
            "payment_status": "string",
            "is_crm_request": "string"
        }
    }
)
pactum.stash.addDataTemplate(
    {
        InvalidName:
        {
            "customeR_NAME": "Aj",
            "dealeR_ID": "string",
            "mobilE_NUMBER": "9047981343",
            "emaiL_ID": "string",
            "enquirY_DATE": "2024-01-19 01:00:00.000",
            "city": "string",
            "utm_source": "string",
            "utm_medium": "string",
            "utm_campaign": "string",
            "gclid": "string",
            "language_code": "string",
            "source": "string",
            "sourcE_ID": 1,
            "area": "string",
            "brand_code": 1,
            "modeL_ID": "string",
            "parT_ID": "string",
            "customeR_VOICE": "string",
            "brancH_ID": "",
            "addresS_LINE1": "string",
            "utm_term": "string",
            "utm_content": "string",
            "parm1": "string",
            "parm2": "string",
            "parm3": "string",
            "parm4": "string",
            "parm5": "string",
            "customeR_STATE": "string",
            "finance": "string",
            "pincode": "string",
            "finance_Company": "string",
            "intentforPurchase": "string",
            "device": "string",
            "crM_INTERNET_ENQUIRY_ID": "string",
            "transactionId": "string",
            "category": "string",
            "payment_type": "string",
            "booking_amount": 0,
            "payment_status": "string",
            "is_crm_request": "string"
        }
    }
)
pactum.stash.addDataTemplate(
    {
        SourceId0:
        {
            "customeR_NAME": "Ajith",
            "dealeR_ID": "string",
            "mobilE_NUMBER": "9047981343",
            "emaiL_ID": "string",
            "enquirY_DATE": "2024-01-19 01:00:00.000",
            "city": "string",
            "utm_source": "string",
            "utm_medium": "string",
            "utm_campaign": "string",
            "gclid": "string",
            "language_code": "string",
            "source": "string",
            "sourcE_ID": 0,
            "area": "string",
            "brand_code": 1,
            "modeL_ID": "string",
            "parT_ID": "string",
            "customeR_VOICE": "string",
            "brancH_ID": "",
            "addresS_LINE1": "string",
            "utm_term": "string",
            "utm_content": "string",
            "parm1": "string",
            "parm2": "string",
            "parm3": "string",
            "parm4": "string",
            "parm5": "string",
            "customeR_STATE": "string",
            "finance": "string",
            "pincode": "string",
            "finance_Company": "string",
            "intentforPurchase": "string",
            "device": "string",
            "crM_INTERNET_ENQUIRY_ID": "string",
            "transactionId": "string",
            "category": "string",
            "payment_type": "string",
            "booking_amount": 0,
            "payment_status": "string",
            "is_crm_request": "string"
        }

    }
)
pactum.stash.addDataTemplate(
    {
        Brandcode0:
        {
            "customeR_NAME": "Ajith",
            "dealeR_ID": "string",
            "mobilE_NUMBER": "9047981343",
            "emaiL_ID": "2024-01-19 01:00:00.000",
            "enquirY_DATE": "string",
            "city": "string",
            "utm_source": "string",
            "utm_medium": "string",
            "utm_campaign": "string",
            "gclid": "string",
            "language_code": "string",
            "source": "string",
            "sourcE_ID": 1,
            "area": "string",
            "brand_code": 0,
            "modeL_ID": "string",
            "parT_ID": "string",
            "customeR_VOICE": "string",
            "brancH_ID": "",
            "addresS_LINE1": "string",
            "utm_term": "string",
            "utm_content": "string",
            "parm1": "string",
            "parm2": "string",
            "parm3": "string",
            "parm4": "string",
            "parm5": "string",
            "customeR_STATE": "string",
            "finance": "string",
            "pincode": "string",
            "finance_Company": "string",
            "intentforPurchase": "string",
            "device": "string",
            "crM_INTERNET_ENQUIRY_ID": "string",
            "transactionId": "string",
            "category": "string",
            "payment_type": "string",
            "booking_amount": 0,
            "payment_status": "string",
            "is_crm_request": "string"
        }

    }
)
pactum.stash.addDataTemplate(
    {
        Areanotpresent:
        {
            "customeR_NAME": "Ajith",
            "dealeR_ID": "string",
            "mobilE_NUMBER": "9047981343",
            "emaiL_ID": "string",
            "enquirY_DATE": "2024-01-19 01:00:00.000",
            "city": "string",
            "utm_source": "string",
            "utm_medium": "string",
            "utm_campaign": "string",
            "gclid": "string",
            "language_code": "string",
            "source": "string",
            "sourcE_ID": 1,
            "area": "",
            "brand_code": 1,
            "modeL_ID": "string",
            "parT_ID": "string",
            "customeR_VOICE": "string",
            "brancH_ID": "",
            "addresS_LINE1": "string",
            "utm_term": "string",
            "utm_content": "string",
            "parm1": "string",
            "parm2": "string",
            "parm3": "string",
            "parm4": "string",
            "parm5": "string",
            "customeR_STATE": "string",
            "finance": "string",
            "pincode": "string",
            "finance_Company": "string",
            "intentforPurchase": "string",
            "device": "string",
            "crM_INTERNET_ENQUIRY_ID": "string",
            "transactionId": "string",
            "category": "string",
            "payment_type": "string",
            "booking_amount": 0,
            "payment_status": "string",
            "is_crm_request": "string"
        }

    }
)
pactum.stash.addDataTemplate(
    {
        DealerIdNull:
        {
            "customeR_NAME": "Ajith",
            "dealeR_ID": "",
            "mobilE_NUMBER": "9047981343",
            "emaiL_ID": "string",
            "enquirY_DATE": "2024-01-19 01:00:00.000",
            "city": "string",
            "utm_source": "string",
            "utm_medium": "string",
            "utm_campaign": "string",
            "gclid": "string",
            "language_code": "string",
            "source": "string",
            "sourcE_ID": 1,
            "area": "string",
            "brand_code": 1,
            "modeL_ID": "string",
            "parT_ID": "string",
            "customeR_VOICE": "string",
            "brancH_ID": "",
            "addresS_LINE1": "string",
            "utm_term": "string",
            "utm_content": "string",
            "parm1": "string",
            "parm2": "string",
            "parm3": "string",
            "parm4": "string",
            "parm5": "string",
            "customeR_STATE": "string",
            "finance": "string",
            "pincode": "string",
            "finance_Company": "string",
            "intentforPurchase": "string",
            "device": "string",
            "crM_INTERNET_ENQUIRY_ID": "string",
            "transactionId": "string",
            "category": "string",
            "payment_type": "string",
            "booking_amount": 0,
            "payment_status": "string",
            "is_crm_request": "string"
        }

    }
)

pactum.stash.addDataTemplate(
    {
        InvalidEnquirydate:
        {
            "customeR_NAME": "Ajith",
            "dealeR_ID": "string",
            "mobilE_NUMBER": "9047981343",
            "emaiL_ID": "string",
            "enquirY_DATE": "string",
            "city": "string",
            "utm_source": "string",
            "utm_medium": "string",
            "utm_campaign": "string",
            "gclid": "string",
            "language_code": "string",
            "source": "string",
            "sourcE_ID": 1,
            "area": "string",
            "brand_code": 1,
            "modeL_ID": "string",
            "parT_ID": "string",
            "customeR_VOICE": "string",
            "brancH_ID": "",
            "addresS_LINE1": "string",
            "utm_term": "string",
            "utm_content": "string",
            "parm1": "string",
            "parm2": "string",
            "parm3": "string",
            "parm4": "string",
            "parm5": "string",
            "customeR_STATE": "string",
            "finance": "string",
            "pincode": "string",
            "finance_Company": "string",
            "intentforPurchase": "string",
            "device": "string",
            "crM_INTERNET_ENQUIRY_ID": "string",
            "transactionId": "string",
            "category": "string",
            "payment_type": "string",
            "booking_amount": 0,
            "payment_status": "string",
            "is_crm_request": "string"
        }

    }
)
pactum.stash.addDataTemplate(
    {
        DuplicateLead:
        {
            "customeR_NAME": "Ajith",
            "dealeR_ID": "string",
            "mobilE_NUMBER": "9047981343",
            "emaiL_ID": "string",
            "enquirY_DATE": "string",
            "city": "string",
            "utm_source": "string",
            "utm_medium": "string",
            "utm_campaign": "string",
            "gclid": "string",
            "language_code": "string",
            "source": "string",
            "sourcE_ID": 0,
            "area": "string",
            "brand_code": 0,
            "modeL_ID": "string",
            "parT_ID": "string",
            "customeR_VOICE": "string",
            "brancH_ID": "",
            "addresS_LINE1": "string",
            "utm_term": "string",
            "utm_content": "string",
            "parm1": "string",
            "parm2": "string",
            "parm3": "string",
            "parm4": "string",
            "parm5": "string",
            "customeR_STATE": "string",
            "finance": "string",
            "pincode": "string",
            "finance_Company": "string",
            "intentforPurchase": "string",
            "device": "string",
            "crM_INTERNET_ENQUIRY_ID": "string",
            "transactionId": "string",
            "category": "string",
            "payment_type": "string",
            "booking_amount": 0,
            "payment_status": "string",
            "is_crm_request": "string"
        }
        
    }
)
Given('Post the correct lead as Accepted Lead', async function () {
    spec["POST".toLowerCase()]("/api/lead");
    spec.withJson({ '@DATA:TEMPLATE@': "LeadPass" });
    spec.withHeaders('Authorization', '406557EB82E651EE239EE47956DAD519ED196899F482AE417C31473DA234842BBB5206266F5F6846EE0E729DBEF23999126E6A7009648004DF0B2E134517A6CC')
    await spec.toss();
});
Given('Post the Mobile no is empty as Missed lead', async function () {
    spec["POST".toLowerCase()]("/api/lead");
    spec.withJson({ '@DATA:TEMPLATE@': "Mobilenumbernotpresent" });
    spec.withHeaders('Authorization', '406557EB82E651EE239EE47956DAD519ED196899F482AE417C31473DA234842BBB5206266F5F6846EE0E729DBEF23999126E6A7009648004DF0B2E134517A6CC')
    await spec.toss();
});
Given('Post the Mobile no as Rejected lead', async function () {
    spec["POST".toLowerCase()]("/api/lead");
    spec.withJson({ '@DATA:TEMPLATE@': "InvalidMobilenumber" });
    spec.withHeaders('Authorization', '406557EB82E651EE239EE47956DAD519ED196899F482AE417C31473DA234842BBB5206266F5F6846EE0E729DBEF23999126E6A7009648004DF0B2E134517A6CC')
    await spec.toss();
});
Given('Post the Name is empty as Missed lead', async function () {
    spec["POST".toLowerCase()]("/api/lead");
    spec.withJson({ '@DATA:TEMPLATE@': "NamenotPresent" });
    spec.withHeaders('Authorization', '406557EB82E651EE239EE47956DAD519ED196899F482AE417C31473DA234842BBB5206266F5F6846EE0E729DBEF23999126E6A7009648004DF0B2E134517A6CC')
    await spec.toss();
});
Given('Post the Invalid Name as Rejected lead', async function () {
    spec["POST".toLowerCase()]("/api/lead");
    spec.withJson({ '@DATA:TEMPLATE@': "InvalidName" });
    spec.withHeaders('Authorization', '406557EB82E651EE239EE47956DAD519ED196899F482AE417C31473DA234842BBB5206266F5F6846EE0E729DBEF23999126E6A7009648004DF0B2E134517A6CC')
    await spec.toss();
});
Given('Post the Invalid SourceId as Rejected lead', async function () {
    spec["POST".toLowerCase()]("/api/lead");
    spec.withJson({ '@DATA:TEMPLATE@': "SourceId0" });
    spec.withHeaders('Authorization', '406557EB82E651EE239EE47956DAD519ED196899F482AE417C31473DA234842BBB5206266F5F6846EE0E729DBEF23999126E6A7009648004DF0B2E134517A6CC')
    await spec.toss();
});
Given('Post the Brand Code is empty as Missed lead', async function () {
    spec["POST".toLowerCase()]("/api/lead");
    spec.withJson({ '@DATA:TEMPLATE@': "Brandcode0" });
    spec.withHeaders('Authorization', '406557EB82E651EE239EE47956DAD519ED196899F482AE417C31473DA234842BBB5206266F5F6846EE0E729DBEF23999126E6A7009648004DF0B2E134517A6CC')
    await spec.toss();
});
Given('Post the Area is empty as Missed lead', async function () {
    spec["POST".toLowerCase()]("/api/lead");
    spec.withJson({ '@DATA:TEMPLATE@': "Areanotpresent" });
    spec.withHeaders('Authorization', '406557EB82E651EE239EE47956DAD519ED196899F482AE417C31473DA234842BBB5206266F5F6846EE0E729DBEF23999126E6A7009648004DF0B2E134517A6CC')
    await spec.toss();
});
Given('Post the  DealerId is empty as Missed lead', async function () {
    spec["POST".toLowerCase()]("/api/lead");
    spec.withJson({ '@DATA:TEMPLATE@': "DealerIdNull" });
    spec.withHeaders('Authorization', '406557EB82E651EE239EE47956DAD519ED196899F482AE417C31473DA234842BBB5206266F5F6846EE0E729DBEF23999126E6A7009648004DF0B2E134517A6CC')
    await spec.toss();
});
Given('Post the Invalid Enquiry Date as Rejected lead', async function () {
    spec["POST".toLowerCase()]("/TvsEmsDmsCommonDropLeads");
    spec.withJson({ '@DATA:TEMPLATE@': "InvalidEnquirydate" });
    spec.withHeaders('Authorization', '406557EB82E651EE239EE47956DAD519ED196899F482AE417C31473DA234842BBB5206266F5F6846EE0E729DBEF23999126E6A7009648004DF0B2E134517A6CC')
    await spec.toss();
});
Given('Post the Duplicate lead as Rejected lead', async function () {
    spec["POST".toLowerCase()]("/TvsEmsDmsCommonDropLeads");
    spec.withJson({ '@DATA:TEMPLATE@': "DuplicateLead" });
    spec.withHeaders('Authorization', '406557EB82E651EE239EE47956DAD519ED196899F482AE417C31473DA234842BBB5206266F5F6846EE0E729DBEF23999126E6A7009648004DF0B2E134517A6CC')
    await spec.toss();
});

When('I received a response', async function () {
    await spec.toss();
})

Then('I expect the response as', function (json) {
    console.log(spec.response())
    spec.response().to.have.jsonLike(JSON.parse(json));

})





