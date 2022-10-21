// visa -> ^4\d{0,15}
// inicia com 4 seguido de 15 dígitos
4235456777564566

//master
// inicia com 5, --> ^5
//   seguido de um dígito entre 1 e 5, --> [1-5]
//   seguido de mais 2 digitos --> \d{0,2}
// OU --> |
// inicia com 22, --> ^22
//   seguido de um dígito entre 2 e 9, --> [2-9]
//   seguido de mais 1 digito --> \d
// OU --> |
// inicia com 2, --> ^2
//   seguido de um dígito entre 3 e 7, --> [3-7]
//   seguido de mais 2 digitos --> \d{0,2}
// anteriores seguidos de 0 a 12 dígitos --> (anteriores)\d{0,12}
// final => (^5[1-5]d{0,2}|^22[2-9]d{0,1}|^2[3-7]d{0,2})d{0,12}
5353535353535353
5665656565656565 //--> não
2323232323232323
2233348573498573
