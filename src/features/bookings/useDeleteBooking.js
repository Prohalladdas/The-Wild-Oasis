import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
        // mutationFn: (id) => deleteCanin(id),
        mutationFn: deleteBookingApi, //same as upperLine code
        onSuccess: () => {
            toast.success("Booking sucssesfully deleted");
            queryClient.invalidateQueries({
                queryKey: ["bookings"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeleting, deleteBooking }
}