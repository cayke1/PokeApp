import Swal, { SweetAlertIcon } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal)

export class ResponseModal {
    icon: SweetAlertIcon;
    pokemon?: string;
    title: string;

    constructor(icon: SweetAlertIcon, title: string, pokemon?: string,) {
        this.icon = icon;
        this.pokemon = pokemon;
        this.title = title;
    }

   success() {
    return MySwal.fire({       
            icon: this.icon,
            title: <p>{this.title} {this.pokemon}</p>
        })
   }
   fail() {
    return MySwal.fire({       
            icon: this.icon,
            title: <p>{this.title} {this.pokemon}</p>,
        })
   }
}