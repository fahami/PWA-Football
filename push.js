var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BHGC-JJ3nsXnhH2IvwCPmgkVQqz4vv_U29h2scKfI7YlC5kzcRB0MFKr5djlbD12gxsdMKakivOdBNPDfhHV0rs",
    "privateKey": "1Fm8oM9QFyh3KgM49z6XdA2a9pp1JXcvV259DSHab6M"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fqtJ0BeEvDg:APA91bG0VVHJYgjr9OzG-VGiC7fwrN8OeW0orsq2bqqILOfq1TPot46abnPKKdYDN4fdPiy3qS6hJRdC8kVMDXymB3jCZ-AFOesP51FDWuUA7qCK1YA9-ydeog3ejlbn434ayWOH-WKU",
    "keys": {
        "p256dh": "BA5YuNVfPVKMgP03s3NTr9LiGLF7Ut4a0ofulI+RpCtOMvoPBTypKjs47l7QhKC5/Ka6Rhuzihfc3yAPNYkapjQ=",
        "auth": "uJM0xK49C8/CMg+Sai6a3w=="
    }
};
const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

const options = {
    gcmAPIKey: '124693896473',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);