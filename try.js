

function a() {
$.ajax({
            type: "POST",
            url: "http://smarthome.cs.virginia.edu/webservice/try2.psp",
            data: ({
                username: "kamin",
                password: "kamin"
            }),
            cache: false,
            async: false,
            dataType: "json",
            success: eventsbind,
            error: function(xhr, status, error) {
  //var err = eval("(" + xhr.responseText + ")");
  alert(xhr.responseText);
}
        });

        function eventsbind(data) {
            document.write(data);
            events = data;

        }
}
