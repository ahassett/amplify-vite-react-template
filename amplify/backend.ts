// WITH AMPLIFY AUTHENTICATOR
import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

defineBackend({
  auth,
  data,
});

// WITH COGNITO AUTHENTICATOR
// import { defineBackend } from "@aws-amplify/backend";

// /**
//  * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
//  */
// const backend = defineBackend({});

// backend.addOutput({
//   auth: {
//     aws_region: "us-east-2",
//     user_pool_id: "us-east-2_0xJbTwpbz",
//     user_pool_client_id: "44tnt619h9pc9d12habgh3srpb",
//     //identity_pool_id: "<your-cognito-identity-pool-id>",
//     //username_attributes: ["email"],
//     // standard_required_attributes: ["email"],
//     // user_verification_types: ["email"],
//     // unauthenticated_identities_enabled: true,
//     // password_policy: {
//     //   min_length: 8,
//     //   require_lowercase: true,
//     //   require_uppercase: true,
//     //   require_numbers: true,
//     //   require_symbols: true,
//     // }
//   },
// });
