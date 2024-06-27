//import { defineBackend } from "@aws-amplify/backend";
//import { auth } from "./auth/resource";
//import { data } from "./data/resource";

// defineBackend({
//   auth,
//   data,
// });

// WITH COGNITO
import { defineBackend } from "@aws-amplify/backend";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({});

backend.addOutput({
  auth: {
    aws_region: "us-east-2",
    user_pool_id: "us-east-2_sUO1gBYWu",
    user_pool_client_id: "5g2iset27ajf1liln5o1h8v1g5",
    identity_pool_id: "us-east-2:b6f720e4-d5ee-4e5d-b641-9c1f7064bb86",
    username_attributes: ["email"],
    standard_required_attributes: ["email"],
    user_verification_types: ["email"],
    unauthenticated_identities_enabled: true,
    password_policy: {
      min_length: 8,
      require_lowercase: true,
      require_uppercase: true,
      require_numbers: true,
      require_symbols: true,
    },
  },
});
