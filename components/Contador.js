const Contador = () => {
  //[valor_inicial,Modificador]
  const [contador, setContador] = React.useState(0);
  const contar = () => {
    setContador(contador + 1);
  };

  const Disminuir = () => {
    setContador(contador - 1);
  };
  return (
    <div>
      <h1 className={contador < 0 ? "menor" : "mayor"}>Contador: {contador}</h1>
      <hr />
      <button onClick={contar}>Aumentar</button>
      <button onClick={Disminuir}>Disminuir</button>
    </div>
  );
};
