<?php
if (empty($_GET["esea_id"]))
{
        echo 'no esea_id';
        die();
}
$id = $_GET["esea_id"];
$check = intval($id);
if ($check == 0)
{
	echo "esea id not found";
	die();
}
require_once("simple_html_dom.php");
$html = shell_exec('xvfb-run phantomjs esea.js ' . $check);

$html = str_get_html($html);
if (strlen($html) < 10) {
	echo "Error cannot connect to ESEA server";
	die();
}
echo $html->find('#rankGraph h1')[0]->plaintext;
echo " " . $html->find('#rankGraph small')[0]->plaintext;
?>
