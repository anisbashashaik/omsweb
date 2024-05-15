export class GlobalConstants {

    //Message
    public static genericError : string ="Something went wrong, please try again later.";

    //Regex
    public static nameRegex : string = "[a-zA-Z0-9 ]*";

    public static emailRegex : string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    public static contactNumberRegex : string = "^[e0-9]{10,10}$";

    // Variable
    public static error: string = "error";

    public static unauthorized: string = "you are not Unauthorized User to access this page";

    public static productExistsError: string = "Product already exists";

public static productAdded:  string = "Product Added Successfully";
}