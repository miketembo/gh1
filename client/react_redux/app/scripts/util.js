export function convertToDate (str) {
    let newDate = new Date(str);
    let yyyy = newDate.getFullYear().toString();
    let mm = (newDate.getMonth()+1).toString(); // getMonth() is zero-based
    let dd  = newDate.getUTCDate().toString();
    let month = mm;
    if (mm.length === 1) {
        month = '0' + mm;
    }
    let day = dd;
    if (dd.length === 1) {
        day = '0' + dd;
    }
    return yyyy + '-' + month + '-' + day;
}

/*eslint no-undef: 0*/
/*eslint no-console: 0*/
export function getEndpoints () {
    let config = {
        SHORT_URL: 'http://gh1.co/',
        BASE_API_URL: 'https://gh1.herokuapp.com'
    };

    if (__DEV__ === true) {
        console.log('**** Using __DEV__ endpoints ****');
        config = {
            SHORT_URL: 'http://gh1.co/',
            BASE_API_URL: 'http://localhost:5000'
        };
    }

    return {
        SHORT_URL: config.SHORT_URL,
        BASE_API_URL: config.BASE_API_URL,
        SITES: config.BASE_API_URL + '/sites',
        USERS: config.BASE_API_URL + '/users'
    };
}

export function isValidUrl (url) {
    if (! url || url.length === 0) {
        return false;
    }
    
    const blacklist = ['gh1.co', 'localhost'];
    try {
        new URL(url);
        for (var i = 0; i < blacklist.length; i++) {
            if (url.indexOf(blacklist[i]) >= 0) {
                return false;
            }
        }
        return true;
    } catch (e) {
        return false;
    }
}

export function showModal () {
    $('#tagModal').modal({ closable: false }).modal('show');
}

export function hideModal () {
    $('#tagModal').modal('hide');
}