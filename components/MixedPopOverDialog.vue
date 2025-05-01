
<template class="">
    <dialog class="bg-gray-100 min-h-60 p-5" id="modal-dialog" ref="dialog">
        <h1>Modal Dialog</h1>
        <br>
        <form method="dialog">
            <button class="w-full text-center mt-30 hover:text-red-600 hover:underline">Close Dialog</button>
        </form>
    </dialog>

    <dialog class="bg-gray-100 min-h-60 p-5" id="popover-dialog" popover="">
        <h1>Popover Dialog</h1>
        <br>
        <button class="w-full text-center mt-30 hover:text-red-600 hover:underline" popovertarget="popover-dialog">Close
            Dialog</button>
    </dialog>

    <div class="grid grid-cols-2">
        <div>
            <!-- button -->
            <button
                class="h-10 w-[40%] m-auto rounded bg-blue-600 px-2 py-1 text-xs font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                popovertarget="popover-dialog">
                Show popover dialog
            </button>
            <br />
            <code>
                <pre>
&lt;dialog id=&quot;popover-dialog&quot; popover=&quot;&quot;&gt;
  Popover Dialog
  &lt;br&gt;
  &lt;button&quot;&gt;Close Dialog&lt;/button&gt;
&lt;/dialog&gt;
</pre>
            </code>
        </div>

        <div>
            <code>
                <pre>
  &lt;dialog id=&quot;modal-dialog&quot;&gt;
    Modal Dialog
    &lt;br&gt;
    &lt;form method=&quot;dialog&quot;&gt;
      &lt;button&gt;Close Dialog&lt;/button&gt;
    &lt;/form&gt;
  &lt;/dialog&gt;
  </pre>
            </code>
            <button
                class="absolute right-2 h-10 w-[20%] m-auto rounded bg-blue-600 px-2 py-1 text-xs font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                @click="showDialog" id="modal-trigger">
                Show modal dialog
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(null)
// document.querySelector("#modal-trigger").addEventListener("click", () => {
//   document.querySelector("#modal-dialog").showModal()
// })
function showDialog() {
    // used to show the dialog
    if (dialog.value) {
        dialog.value.showModal()
    }
}
</script>
