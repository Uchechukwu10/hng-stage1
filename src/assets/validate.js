export function validate(name, value) {
    if (name==='firstName' || name==='lastName') {
        const result = /[^A-Za-z]/.test(value);
        const length = value.length;
        if (length>=2) {
            return {
                valid: !result,
                message: 'Enter a valid name'
            };
        } else {
            return {
                valid: false,
                message: 'Name is too short'
            }
        }
    }
    if (name==='email') {
        const result = /^\w+([.-]?\w+)*@\w([.-]?\w+)*(\.\w{2,3})+$/.test(value);
        if (result===false) {
            return {
                valid: result,
                message: 'Enter a valid email address'
            };
        } else {
            return {
                valid: result,
                message: ''
            };
        }
    }
    if (name==='message') {
        const length = value.length;
        if (length>=2) {
            return {
                valid: true,
                message: ''
            };
        } else {
            return {
                valid: false,
                message: 'Please enter a message'
            };
        }
    }
}

