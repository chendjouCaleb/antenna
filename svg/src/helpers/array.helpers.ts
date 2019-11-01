export class ArrayHelpers {
    public static haveOneValue(array: any[]){
        let state = true;

        for(let i = 1; i < array.length; i++){
            if(array[i] !== array[i-1]){
                state = false;
                break;
            }
        }

        return state;
    }

    public static allHaveValue(array: any[], value: any){
        let state = true;

        for(let i = 0; i < array.length; i++){
            if(array[i] !== value){
                state = false;
                break;
            }
        }

        return state;
    }
}