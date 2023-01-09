function power($val, $pow) {

if (!$pow) {
  return 1;
}

return $pow === 1 ? $val : $val * power($val, $pow - 1);
}

echo power(4, 2);