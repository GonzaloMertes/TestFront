public static void main (String[] args)
int vector []=new int [10];
Scanner teclado = new Scanner (System.in);
for (int i=0; i<vector.lenght; i++) {
	System.out.printIn ("ingrese el nro para la posicion"+i);
    int tecla = teclado.nextInt();
	vector [i] = tecla;
}