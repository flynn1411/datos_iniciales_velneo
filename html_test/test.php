<?php
ob_end_clean();
header('Content-Type: application/json');
//header('Content-Disposition: attachment; filename='.$_GET["filename"]);

//echo $_GET["filename"];

$file = "https://ctaauditores.com/VELNEO/".$_GET["filename"];

readfile($file);
?>