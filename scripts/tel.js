const input1 = document.querySelector("#phone");
        const button = document.querySelector("#btn");
        
         const errorMsg = document.querySelector("#error-msg");
         const errorMap = ["Invalid number", "Invalid country code", "Your numder is too short", "Your numder is too long"];
         
            const message = document.querySelector("#message");  
           const form = document.querySelector("#form");
          const iti = window.intlTelInput(input1, {
       
        hiddenInput: () => ({ phone: "phone_full", country: "country_code" }),
        allowExtensions: true,
        separateDialCode: true,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js" // just for formatting/placeholders etc
        });
        const reset = () => {
        input1.classList.remove("error");
        errorMsg.innerHTML = "";
        errorMsg.classList.add("hide");
        errorMsg.classList.remove("tel_error")
        };

        const showError = (msg) => {
        input1.classList.add("error");
        errorMsg.innerHTML = msg;
        errorMsg.classList.remove("hide");
        errorMsg.classList.add("tel_error")
        };

        // on click button: validate
        button.addEventListener('click', () => {
        reset();
        if (!input1.value.trim()) {
            showError("Required. Enter your phone number");
           
            input1.classList.add("error")
        } else if (iti.isValidNumberPrecise()) {
            button.type = "submit"
        } else {
            const errorCode = iti.getValidationError();
            const msg = errorMap[errorCode];
            showError(msg);
        }
        });

        // on keyup / change flag: reset
        input1.addEventListener('change', reset);
        input1.addEventListener('keyup', reset);