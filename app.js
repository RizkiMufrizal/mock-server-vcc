var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;

var router = express.Router();

router.post("/create", function(req, res) {
  if (req.headers.authorization) {
    console.log(req.headers);
    console.log(req.body);
    return res.json({
      "cid": "009",
      "status": "000",
      "message": "Transaksi Anda Berhasil",
      "vcn":"CACYFEMiDw+UZnugEQqzyddOjwJdyg7QR9U3H8TdDFdrYL4D7sbtb/nMUnW3CeNhvNh/1o0kz2KUYRvq7gVryaV1t04el9uQO3HkymlUEDS5WiUOVqDQ6MA/nGPvVol2R8/npdyNuAzEBnaRU3SYYjdMtSooSuPXqsmRDpfxRk2Ni7Arsnezxy2vRQsQVPt4A3QfDAfilh+BJAGRQAUmE0N+iVenL/vKtmt8hoSRVOxv6WGC8SexwvpZrX0+UtTSJMj7HYkVL3H6gSJHbi0dJ3KcNWBPvHH6k4vXNga9i+dLGTwuwzuZ27BKgP0r+Gh5wdJrbkNmexjofQW0UkNcKsK9zapOP6wLgWMPWaFk3dg=.P/QCaTefDD2PGo1rjFM0rg=="
    });
  } else {
    return res.json({
      message: "Not Authentication"
    });
  }
});

router.post("/inquiry", function(req, res) {
  if (req.headers.authorization) {
    console.log(req.headers);
    console.log(req.body);
    res.json({
      cid: "009",
      status: "000",
      message: "Transaksi Anda Berhasil",
      vcn: {
        accNum: "0123445678",
        vcn: "123456******3456",
        validUntil: "2019-02-19T10:35:38.03+07:00",
        refNum: "1234-1234-1234",
        respId: "1234567890asdfghjkl",
        amount: "5000000",
        balance: "3000000",
        maxTrx: "3",
        name: "Yohanes Boyoh",
        email: "boyoh@docotel.com",
        currency: "IDR",
        createdDatetime: "2019-02-19T10:35:38",
        status: "1"
      }
    });
  } else {
    return res.json({
      message: "Not Authentication"
    });
  }
});

router.post("/inquirylist", function(req, res) {
  if (req.headers.authorization) {
    console.log(req.headers);
    console.log(req.body);
    res.json({
      "cid": "009",
      "status": "000",
      "message": "Transaksi Anda Berhasil",
      "vcn":"irku9PCwMsS2QqHidC0Z0xuJIm20uPd7SClhrXlF7W/qSIiupMroW2E2Rz3buK8gURwPC5OyADNrv33P6H3KoliDAxiITvO9QCOIUXf5Qg+M8giVlveIBBm0wMGudWRQbz0VInCjGzVZn5ys1gvXyrcsqnsDgll7a1c1P9AD3oEExoDy5hn8Nbjq4yzKgYHEk9zkddJNEnHSThHdJbIHIfV5MP65XB889kBYpUr9/23WZWHqIAQCAM3jTe2yuOwaEjexguxooVk/IACYGT1xjRDzrsrxL8tUDdr/J9Y8sLkIdriCuzbjOuajpjgu4MKR5YmkW/pkZMtVZnqC7Y1idM632O7F3/Rix3nca74RF0SS7rWQHRnypeaFzs1PfaWC/elMyWxRwfcOB8KVuXHRTeoiR6RY064xkKt/7fS/zbmC6+QkP2Zn5h91478IgqwaS9tMqtwusXn+4sGxazQZb1758DnIdbYwX+dRGMEvqwjHRq6MQpX1ras8kWZfxs/I9BGRIJmj8nntL/m3xKmP3pCitEl6MxSiMuHcrGZ+Jf4S9jtQlA02JuHnr7b05VlazI3zq9buN3kCZs5//CBUqJaTkwmMD9gv+gP0z3KkR6QLmu6dOku6Yvr7QmOjTb2Zk9mpwiYZ+R6mnujAEWzawRrWrhdmjJ66SkIuOUi0Z2iJ3zEic96LppT9BoEKdCixW5IOjJRfQe6M6key55kdGwPvnWal2br2hm9vl75DhKGVfydiGCYHQ5a1p2Gm+Pe+DawpeAg5ZJGtd+4KNrI5CV9Br4f5aoZMmPM2xOHpDWedsolkYzDjoHB4y4dyojXxOqeMeiwMp3G1fIOPCMxIukZgi0C8WvgMsizTnelaNaw=.nnS2xdm/90FCGQHysHlVCA=="
    });
  } else {
    return res.json({
      message: "Not Authentication"
    });
  }
});

router.post("/expired-notification", function(req, res) {
  if (req.headers.authorization) {
    console.log(req.headers);
    console.log(req.body);
    res.json({
      TxnRefNo: "APPS01203902",
      ChannelId: "APPS01",
      ResponseTime: "20190224120000",
      ServiceCode: "VCC_EXP_INFO",
      ResponseCode: "000000",
      ResponseDesc: "Success"
    });
  } else {
    return res.json({
      message: "Not Authentication"
    });
  }
});

router.post("/refund", function(req, res) {
  if (req.headers.authorization) {
    console.log(req.headers);
    console.log(req.body);
    res.json({
      TxnRefNo: "APPS01203902",
      ChannelId: "APPS01",
      ResponseTime: "20190224120000",
      ServiceCode: "VCC_REFUND_INFO",
      ResponseCode: "000000",
      ResponseDesc: "Success"
    });
  } else {
    return res.json({
      message: "Not Authentication"
    });
  }
});

router.post("/transaction-notification", function(req, res) {
  if (req.headers.authorization) {
    console.log(req.headers);
    console.log(req.body);
    res.json({
      TxnRefNo: "APPS01203902",
      ChannelId: "APPS01",
      ResponseTime: "20190224120000",
      ServiceCode: "VCC_TRX_INFO",
      ResponseCode: "000000",
      ResponseDesc: "Success"
    });
  } else {
    return res.json({
      message: "Not Authentication"
    });
  }
});

router.post("/forceStop", function(req, res) {
  console.log(req.headers);
  console.log(req.body);
  res.json({
    "status": "000",
    "message": "VCN Berhasil di Non Aktifkan"
  });
});

app.use("/v1/api", router);

app.listen(port);
console.log("Magic happens on port " + port);
