// main ===================================================== //
const convertToMinutes = (seconds: number) => {
    let coeffecient = seconds / 60;
    let minutes = Math.trunc(coeffecient);
    let remains_seconds = minutes % 1 * 60;

    return (minutes  + ":" + remains_seconds);
};

// export =================================================== //
export default convertToMinutes;