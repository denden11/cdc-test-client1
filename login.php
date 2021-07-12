<?php
// Start the session
ini_set("session.cookie_httponly", 1); // Disables client-side session access
session_start();
?>
<html>

<head>
    <title>Basic Login Page with Validation</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    // Load the Gigya Web SDK
    <script type="text/javascript" lang="javascript"
        src="https://cdns.us1.gigya.com/js/gigya.js?apikey=3_ojnmzVXjaGTCcK4MHoSjrWzeXQPFfYHRW9XvKMPEf4PzI6kliiUrY924BBtaZuBQ"></script>
    <style>
        #loginDiv {
            border: 1px solid blue;
            width: 200px;
            height: 50px;
            background-color: yellow;
            font-weight: bold;
            font-size: 150%;
            z-index: 100;
            text-align: center;
            cursor: pointer;
            margin-top: 100px;
        }
    </style>
</head>

<body>
    <div id="loginDiv">Login!</div>
    <div id="responseDiv"> </div>
    <script>
        $(document).on("click", "#loginDiv", function () {
            gigya.accounts.showScreenSet({ screenSet: 'Default-RegistrationLogin' });
        });
        // Global vars for debugging
        var xthisUid = '';
        var xthisUidSig = '';
        var xthisSigTStamp = '';
        // The function to send the AJAX call to the server
        function MakeRequest_sigCheck() {
            $.post('signatureProcessor.php', {
                "xUID": xthisUid, "xUIDSignature": xthisUidSig, "xsignatureTimestamp": xthisSigTStamp
            })
                .done(function (data) {
                    document.getElementById('responseDiv').innerHTML = data;
                    console.log('Server response: ');
                    console.log(data);
                });
        }
        // The function to run on the onLogin event
        function sigCheck(response) {
            resObj = response;
            xthisUid = resObj.UID;
            xthisUidSig = resObj.UIDSignature;
            xthisSigTStamp = resObj.signatureTimestamp;
            MakeRequest_sigCheck();
        }
        // Add the event handler
        gigya.accounts.addEventHandlers({ onLogin: sigCheck });
    </script>
</body>

</html>