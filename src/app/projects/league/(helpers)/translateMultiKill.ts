export const translateMultiKill = (multikill: number) => {
    switch (multikill) {
        case 2:
            return 'Double Kill';
        case 3:
            return 'Triple Kill';
        case 4:
            return 'Quadra Kill';
        case 5:
            return 'Penta Kill';
    }
}