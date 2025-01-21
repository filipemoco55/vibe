<script setup>
import { ref } from "vue";
import { useMerchStore } from "@/stores/merch";
import Sidebar from "@/components/SideNavbar.vue";


const merchStore = useMerchStore();


const showModal = ref(false);
const isEditing = ref(false);
const currentMerchItem = ref({
  id: null,
  name: "",
  price: null,
  size: [],
  image: null,
});

const openModal = (item = null) => {
  if (item) {
    currentMerchItem.value = { ...item, size: [...item.size] };
    isEditing.value = true;
  } else {
    currentMerchItem.value = { id: null, name: "", price: null, size: [], image: null };
    isEditing.value = false;
  }
  showModal.value = true;
};

const validateMerchItem = () => {
  if (!currentMerchItem.value.name.trim()) {
    alert("Por favor, insira um nome válido.");
    return false;
  }
  if (!currentMerchItem.value.price || currentMerchItem.value.price <= 0) {
    alert("Por favor, insira um preço válido.");
    return false;
  }
  if (!currentMerchItem.value.size.length) {
    alert("Adicione pelo menos um tamanho.");
    return false;
  }
  return true;
};

const saveMerchItem = () => {
  if (!validateMerchItem()) {
    return;
  }

  if (isEditing.value) {
    merchStore.updateItem(currentMerchItem.value.id, {
      name: currentMerchItem.value.name,
      price: currentMerchItem.value.price,
      size: currentMerchItem.value.size,
      image: currentMerchItem.value.image,
    });
  } else {
    const newId = merchStore.merch.length
      ? Math.max(...merchStore.merch.map((item) => item.id)) + 1
      : 1;
    merchStore.addItem(
      newId,
      currentMerchItem.value.name,
      currentMerchItem.value.price,
      currentMerchItem.value.size,
      currentMerchItem.value.image
    );
  }

  showModal.value = false;
  currentMerchItem.value = { id: null, name: "", price: null, size: [], image: null };
};

const addSize = (size) => {
  const trimmedSize = size.trim(); 
  if (trimmedSize && !currentMerchItem.value.size.includes(trimmedSize)) {
    currentMerchItem.value.size.push(trimmedSize);
  } else if (!trimmedSize) {
    alert("Por favor, insira um tamanho válido.");
  } else {
    alert("Este tamanho já foi adicionado.");
  }
};


const removeSize = (size) => {
  currentMerchItem.value.size = currentMerchItem.value.size.filter((s) => s !== size);
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      currentMerchItem.value.image = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const removeMerchItem = (id) => {
  merchStore.removeItem(id);
};


</script>


<template>
  <div class="admin-container">
    <!-- Passando a função de logout para o Sidebar -->
    <Sidebar :logout="logout" />

    <div class="content">
      <h1>Merch Management</h1>

      <table class="merch-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Size</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in merchStore.merch" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.size.join(", ") }}</td>
            <td>
              <img v-if="item.image" :src="item.image" alt="Image" class="table-image" />
              <span v-else>No Image</span>
            </td>
            <td>
              <button class="action-btn edit" @click="openModal(item)">Edit</button>
              <button class="action-btn delete" @click="removeMerchItem(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <button class="add-button" @click="openModal()">Add Merch</button>

      <div class="modal" v-if="showModal">
        <div class="modal-content">
          <h2>{{ isEditing ? "Edit Merch" : "Add New Merch" }}</h2>
          <input v-model="currentMerchItem.name" type="text" placeholder="Name" />
          <input v-model="currentMerchItem.price" type="number" placeholder="Price" />
          <div class="size-input">
  <input
    type="text"
    placeholder="Add Size"
    @keydown.enter.prevent="addSize($event.target.value); $event.target.value = ''"
  />
        <div class="sizes-list">
             <span class="size-tag" v-for="size in currentMerchItem.size" :key="size">
                {{ size }}
             <button @click="removeSize(size)">x</button>
          </span>
        </div>
    </div>

          <input type="file" @change="handleImageUpload" accept="image/*" />
          <div class="modal-actions">
            <button @click="saveMerchItem">{{ isEditing ? "Save Changes" : "Add" }}</button>
            <button @click="showModal = false">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<style scoped>
.admin-container {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 2rem;
  background-color: #f4f4f4;
  color: #333;
}

h1 {
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #004f6f;
}

.merch-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.merch-table th, .merch-table td {
  padding: 12px 15px;
  text-align: left;
  border: 1px solid #ddd;
}

.merch-table th {
  background-color: #004f6f;
  color: white;
}

.merch-table td {
  background-color: #fff;
}

.action-btn {
  padding: 8px 12px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn.edit {
  background-color: #05e353;
}

.action-btn.delete {
  background-color: #f44336;
}

.action-btn:hover {
  opacity: 0.8;
}

.add-button {
  margin-top: 1rem;
  padding: 12px 24px;
  background-color: #004f6f;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #0077a1;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #004f6f;
}

.modal input {
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
}

.modal-actions button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.modal-actions button:first-child {
  background-color: #004f6f;
  color: white;
}

.modal-actions button:last-child {
  background-color: #f44336;
  color: white;
}

.modal-actions button:hover {
  opacity: 0.8;
}

.size-input {
  margin-bottom: 1rem;
}

.size-tag {
  background-color: #0077a1;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 5px;
  display: inline-flex;
  align-items: center;
}

.size-tag button {
  background: transparent;
  border: none;
  color: white;
  font-weight: bold;
  margin-left: 5px;
  cursor: pointer;
}
.table-image {
  max-width: 100px; 
  max-height: 100px; 
  object-fit: cover; 
  border-radius: 4px; 
}
</style>
