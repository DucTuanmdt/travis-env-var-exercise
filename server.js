function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log("Microservices rock!");
    console.log("TEST_VARIABLE value: ", process.env.TEST_VARIABLE);
    await sleep(5000);
  }
}

main();
