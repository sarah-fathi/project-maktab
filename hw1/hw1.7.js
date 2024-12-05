let name = prompt("enter a character")

function tabdil(character){
    switch (character){
        case 'a':
            return '$';
            case 'z':
                return '#';
                case 'M':
                    return 'x';
                    case 'D':
                        return '@';
                        default:
                            return 'no character';

    }
}
alert (tabdil(name));