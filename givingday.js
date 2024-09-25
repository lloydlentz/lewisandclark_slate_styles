$(document).ready(function() {
    // Iterate over each div with class "super-lazy-load"
    $('.super-lazy-load').each(function() {
        var $div = $(this);
        var record = $div.data('record');

        // Construct the endpoint URL with the data-record value
        var endpoint = "?cmd=get_field&record=" + record + "&field=fita_html";

        // Make an AJAX request to fetch the data
        $.ajax({
            url: endpoint,
            type: 'GET',
            success: function(response) {
                // Assuming the response contains the HTML content
                $div.html(response);
            },
            error: function(xhr, status, error) {
                console.error("Error fetching data for record: " + record, error);
            }
        });
    });
});
