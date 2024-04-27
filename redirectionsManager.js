function shower()
        {
            window.location.href = "showerBenefits.html"
        }
        function theet()
        {
            window.location.href = "theet.html"
        }
        function sheets()
        {
            window.location.href = "WhyINeedToChangeMySheetsFrequently.html"
        }
        function deodorant()
        {
            window.location.href = "WhyINeedToUseDeodorant.html"
        }
        function hands()
        {
            window.location.href = "whyINeedToWashMyHands.html"
        }
        function dirtClothes()
        {
            window.location.href = "whyiWontReutilizeMyDirtClothes.html"
        }
        function bathroom()
        {
            window.location.href = "whyINeedToCleanTheBathroom.html"
        }
        function us()
        {
            window.location.href = "aboutUs.html"
        }
        function campaign()
        {
            window.location.href = "aboutOurCampaign.html"
        }
        function credits()
        {
            window.location.href = "credits.html"
        }
        function instagram()
        {
            window.location.href = "https://www.instagram.com/habitos.de.higiene.2b/"
        }
        function youtube()
        {
            window.location.href =""
        }
        window.addEventListener('beforeunload', function(event) {
            document.title = "¡No te vayas!";
            
            var confirmationMessage = "¿Ya te vas? Te lo advertimos, seguiras oliendo como a alguien que le gustan las sabritas crema y especias.";
            return confirmationMessage;
        });