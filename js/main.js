function openModal(modalID, modalImgID, src) {
    var modal = document.getElementById(modalID);       // Get the modal
    var modalImg = document.getElementById(modalImgID); // Get the image and insert it inside the modal

    modal.style.display = "block";                      //Show the modal
    modalImg.src = src;                                 //Set the src

}
function closeModal(modalID) {
    var modal = document.getElementById(modalID);       //Get the modal
    modal.style.display = "none";                       //Hide the modal
}