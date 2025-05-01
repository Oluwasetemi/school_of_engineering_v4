<template id="star-rating-template">
    <form>
        <fieldset>
            <legend>Rate your experience:</legend>
            <rating>
                <input type="radio" name="rating" value="1" aria-label="1 star" required />
                <input type="radio" name="rating" value="2" aria-label="2 stars" />
                <input type="radio" name="rating" value="3" aria-label="3 stars" />
                <input type="radio" name="rating" value="4" aria-label="4 stars" />
                <input type="radio" name="rating" value="5" aria-label="5 stars" />
            </rating>
        </fieldset>
        <button class="btn" type="reset">Reset</button>
        <button class="btn ml-3" type="submit">Submit</button>
    </form>
</template>


<style scoped>
rating {
    display: inline-flex;
}

/* make the current radio visually hidden */
input[type=radio] {
    appearance: none;
    margin: 0;
    box-shadow: none;
    /* remove shadow on invalid submit */
}

/* generated content is supported on <input> */
input[type=radio]::after {
    content: '\2605';
    font-size: 128px;
}

/* by default, if no value is selected, all stars are grey.
See https://web.dev/learn/forms to learn about requiring radio buttons */
input[type=radio]:invalid::after {
    color: #e71414;
}

/* if the rating has focus or is hovered, make all stars darker */
rating:hover input[type=radio]:invalid::after,
rating:focus-within input[type=radio]:invalid::after {
    color: #888;
}

/* make all the stars after the focused one light grey, until a value is selected */
rating:hover input[type=radio]:hover~input[type=radio]:invalid::after,
rating input[type=radio]:focus~input[type=radio]:invalid::after {
    color: #ddd;
}


/* if a value is selected, make them all selected */
rating input[type=radio]:valid {
    color: orange;
}

/* then make the ones coming after the selected value look inactive */
rating input[type=radio]:checked~input[type=radio]:not(:checked)::after {
    color: #ccc;
    content: '\2606';
    /* optional. hollow star */
}
</style>
