/**
 * @amlplugins/elevenlabs-dubbing
 *
 * Thin namespaced re-export of the native @elevenlabs/elevenlabs-js SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * ElevenLabs Dubbing — automated translation + lip-sync dubbing for video across 32+ languages.
 */

import * as _sdk from "@elevenlabs/elevenlabs-js";
export * from "@elevenlabs/elevenlabs-js";
export { _sdk as sdk };
export default _sdk;
