function getBodyRequest() {
  return {
    from: $("#date_from").val(),
    to: $("#date_to").val(),
  };
}

$(document).ready(function () {
  $("#tblPayments").DataTable();
  $("#date_from").datepicker({
    uiLibrary: "bootstrap4",
  });
  $("#date_to").datepicker({
    uiLibrary: "bootstrap4",
  });

  $("#btnSearch").click(function () {
    const body = getBodyRequest();

    if (body.from === "" || body.to === "") {
      alert("Dates cannot be empty");
      return;
    }

    let url = "";
    let application_key = "";

    if ($("#rbCash").is(":checked")) {
      url = configUrl.cash.url;
      application_key = configUrl.cash.application_key;
    } else {
      url = configUrl.card.url;
      application_key = configUrl.card.application_key;
    }

    const config = {
      method: "post",
      url: url,
      headers: {
        "x-access-token": access_token,
        "x-application-key": application_key,
        "Content-Type": "application/json",
      },
      data: body,
    };

    axios(config)
      .then(function (response) {
        $("#tblPayments").DataTable({
          dom: "Bfrtip",
          buttons: ["copyHtml5", "excelHtml5", "csvHtml5", "pdf"],
          data: response.data,
          responsive: true,
          bDestroy: true,
          iDisplayLength: 10,
          columns: [
            { data: "payment_id", name: "ID" },
            { data: "payment_country", name: "Country" },
            {
              data: "payment_provider_code_reference",
              name: "Provider_Code_Reference",
            },
            { data: "payment_status", name: "Status" },
            { data: "transaction_amount", name: "Amount" },
            { data: "payer_id", name: "Payer_ID" },
            { data: "payment_date_created", name: "Date_Created" },
            { data: "payment_date_approved", name: "Date_Approved" },
            {
              data: "payment_code_reference",
              name: "Code_Reference",
            },
            { data: "payment_provider_id", name: "Provider_ID" },
            { data: "payer_name", name: "Payer_Name" },
            {
              data: "payer_identification_number",
              name: "Identifitication_Payer",
            },
            {
              data: "payer_identification_type",
              name: "Identification_Type",
            },
            { data: "application_description", name: "App_Description" },
          ],
        });
      })
      .catch(function (error) {
        alert("An ocurred error, please contact admin");
        console.log(error);
      });
  });
});
