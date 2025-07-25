import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
        // mutationFn: (id) => deleteCanin(id),
        mutationFn: deleteCabinApi, //same as upperLine code
        onSuccess: () => {
            toast.success("Cabin sucssesfully deleted");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeleting, deleteCabin }
}