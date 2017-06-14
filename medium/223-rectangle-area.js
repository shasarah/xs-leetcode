/**
 * @param {number} A rec_a bottom left x
 * @param {number} B rec_a bottom left y
 * @param {number} C rec_a top right x
 * @param {number} D rec_a top right y
 * @param {number} E rec_b bottom left x
 * @param {number} F rec_b bottom left y
 * @param {number} G rec_b top right x
 * @param {number} H rec_b top right y
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    let result = 0;
    // calculate overlapped area
    let x_overlap = 0, y_overlap = 0, area_overlap = 0;
    x_overlap = Math.min(C, G) - Math.max(A, E);
    y_overlap = Math.min(D, H) - Math.max(B, F);
    if (x_overlap > 0 && y_overlap > 0) {
        area_overlap = x_overlap * y_overlap;
    }
    return (C-A)*(D-B) + (G-E)*(H-F) - area_overlap;
};
