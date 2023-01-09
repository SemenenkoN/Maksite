<?php 
$n = 10;
$i = 0;
function pow1($i) {
  if ($i == 0) {
    return "$i" . ' - это ноль<br />';
  }
  if ($i % 2) {
    return "$i" . ' - нечетное число<br />';
  } else {
    return "$i" . ' - четное число<br />';
  }
}
 
do {
  echo pow1($i);
  $i++;
} while ($i <= $n); 