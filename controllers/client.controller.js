const crearNuevaLinea = (nombre,email) =>{
    const linea=document.createElement("tr");
    const content=`
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button">
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
    linea.innerHTML=content;
    return linea;
};

const table=document.querySelector("[data-table]");
