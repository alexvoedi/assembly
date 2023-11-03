<script setup lang="ts">

</script>

<template>
  <NH1>Science</NH1>

  <div class="space-y-6">
    <NCard
      content-style="padding: 0;"
      title="Researching Sciences"
    >
      <ScienceResearchingSciencesTable />
    </NCard>

    <NCard
      content-style="padding: 0;"
      title="Researchable Sciences"
    >
      <ScienceResearchableSciencesTable />
    </NCard>

    <NCard
      content-style="padding: 0;"
      title="Researched Sciences"
    >
      <ScienceResearchedSciencesTable />
    </NCard>
  </div>
</template>
