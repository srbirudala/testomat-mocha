
let algoType = ["MD5", "HMAC_SHA1", "PHPass", "CRYPT_MD5", "DRUPAL7", "SHA1", "SHA1PasswordPBKDF2", "PBKDF2"];

algoType.forEach(function (algo) {

    pinHash.Type = algo;

    describe(`Pin Hashing - Verify different hashing Algo PIN Configuration ${algo} @Se54cb9a1`, function () {

        it(`\n Login Checking with different Support Algos ${algo} @Ta77bad8b`, function (done) {
        });

    });

});