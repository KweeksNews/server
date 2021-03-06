<?php
$titles = array(
  403 => 'Forbidden',
  404 => 'Not Found',
  405 => 'Method Not Allowed',
  408 => 'Request Timeout',
  500 => 'Internal Server Error',
  502 => 'Bad Gateway',
  504 => 'Gateway Timeout',
);
$code = $_GET['code'] ?? false;
$title = $titles[$code] ?? false;

if ($code == false) {
    die();
}

if ($title == false) {
    if (is_int($code) == true && strlen($code) == 3) {
        $title = 'Error';
    } else {
        $code = 400;
        $title = 'Bad Request';
    }
}

?>

<!DOCTYPE html>
<html lang="id-ID">

<head>
  <meta charset="UTF-8">
  <title><?= $title ?> | KweeksNews Network</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" sizes="180x180" href="https://server1.kweeksnews.com/assets/images/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://server1.kweeksnews.com/assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://server1.kweeksnews.com/assets/images/favicon-16x16.png">
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Quicksand&display=swap'>
  <link rel="stylesheet" href="https://server1.kweeksnews.com/assets/css/errorpage.css">
</head>

<body>
  <header>
    <img src="https://server1.kweeksnews.com/assets/images/kweeksnet.svg" alt="KweeksNet" title="KweeksNet" width="220">
  </header>
  <main>
    <div class="container">
      <h1>Error&nbsp;<?= $code ?></h1>
      <a href="/">Beranda</a>
    </div>
  </main>
  <footer>
    <a href="https://network.kweeksnews.com/" target="_blank" rel="noopener">Network</a> | <a
      href="https://status.kweeksnews.com/" target="_blank" rel="noopener">Status</a>
    <p>
      &copy;
      <span id="copyright">
      <script>document.getElementById('copyright').innerHTML = new Date().getFullYear();</script>
      </span>
      <span class="marking">KweeksNews Network</span>. All Rights Reserved.
    </p>
  </footer>
</body>

</html>